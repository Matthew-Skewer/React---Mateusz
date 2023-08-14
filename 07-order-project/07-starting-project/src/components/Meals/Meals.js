import Summary from './MealsSummary'
import React, {Fragment} from 'react'
import AviMeal from './AvailableMeals'


const Meals = () => {
    return <Fragment>
        <Summary></Summary>
        <AviMeal></AviMeal> 
    </Fragment>
}
export default Meals;