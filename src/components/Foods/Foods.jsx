import React from 'react';
import Food1 from './Food/FoodCard';

import "./foods.scss";
const Foods = () => {
  return (
   
   <div className='foodpage'>
   <div className='heading'> Explore The Food
   </div>
    <div className='grid'>
  {Array.from({ length: 8}).map((_, idx) => (
    
    <div className='food'><Food1/></div>
    
    ))}
</div>
</div>

  )
}

export default Foods;