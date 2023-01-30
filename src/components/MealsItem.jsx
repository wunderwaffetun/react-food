import { Link } from 'react-router-dom'



export function MealsItem({ meal }){
    const {idMeal: id, strMeal: title, strMealThumb: url} =  meal 
    return (
        <div className="card">
            <div className="card-image">
                <img src={url} alt="" />
                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>{title}</p>
            </div>
            <div className="card-action">
                <Link to={id} className="btn">Watch recipe</Link>
            </div>
        </div>
    )
}