import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFilteredCategory } from '../api'
import Preloader from "../components/Preloader"
import { MealsList } from "../components/MealsList"


export function Category(){
    const { name } = useParams()
    const [meals, setMeals] = useState([])
    const [noDishes, setNoDishes] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        getFilteredCategory(name)
        .then(data => {
            if(data.meals !== null){
                setMeals(data.meals)
            } else {
                setNoDishes(true)
            }
        })
    }, [name])

    return <>
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
        <div className="meals-list">
            {noDishes ? <div className="preloader-wrapper no-dishes">No dishes</div> :  (
                !meals.length ? <Preloader/> : <MealsList meals={meals} />
            )}
        </div>
    </>
}