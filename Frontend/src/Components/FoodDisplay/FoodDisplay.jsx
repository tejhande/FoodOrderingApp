import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

    return (
        <div className='FoodDisplay' id='FoodDisplay'>
            <h2>Top Dishes Near You</h2>
            <div className="FoodDisplayList">
                {food_list.map((item, index) => {
                    if (category === "ALL" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                    // return null; // Add this line to handle the case where the condition is not met
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
