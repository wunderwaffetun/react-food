import { MealsItem } from "./MealsItem"

export function MealsList({meals}){
    
    return <>
        { meals.map(meal => <MealsItem meal={meal} key={meal.idMeal}/>)}
    </>
}