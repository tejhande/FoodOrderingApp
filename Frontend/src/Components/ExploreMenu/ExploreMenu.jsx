import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='ExploreMenu' id='ExploreMenu'>
        <h1>
            Explore Our Menu
        </h1>
        <p className='ExploreMenuText'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingr and culinury expertise. Our Misson Is to satisfy your cravings and elavate your dining experinece, one delicious meal at a time </p>
        <div className="ExploreMenuList">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="ExploreMenuListItem">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu