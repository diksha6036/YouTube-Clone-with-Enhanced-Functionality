import React from 'react'
import Button from './Button'

const list=["All","Funny","Motivation","Adventure","Live","Songs","Games","News","Cooking","Valentines","Love","Animals","Vlogs","Meditation"];
const ButtonList = () => {
  return (
    <div className='flex'>
     {
        list.map((item,index)=>(<Button name={item} key={index}/>))
     }
    </div>
  )
}

export default ButtonList
