import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMealById } from '../api'
import Preloader from './Preloader'
import { useNavigate } from 'react-router-dom'

export function Recipe(){
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        getMealById(id)
        .then(data => {setRecipe(data.meals[0])})
    }, [id])


    return <>
        <button className="btn" onClick={()=>{navigate(-1)}}>Go Back</button>
        {!recipe.idMeal? <Preloader /> : (
            
            <div className='recipe-wrapper'>
                <h1 className="title-recipe">{recipe.strMeal}</h1>
                <h6 className="recipe-category">Category: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6 className="recipe-area">Area: {recipe.strArea}</h6>: null}
                <img className="title-recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div className='title-recipe-descr'>{recipe.strInstructions}</div>
                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Ingridient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map(key => {
                                if(key.includes("strIngredient") && recipe[key]){
                                    return <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </table>
                {recipe.strYoutube ? (
                    <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={recipe.strMeal}  allowFullScreen></iframe>
                ) : null}
                
            </div>
        )}
        
        
    </>
}