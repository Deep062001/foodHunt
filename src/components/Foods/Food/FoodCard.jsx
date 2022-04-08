import React from 'react';

import pizza from '../../../assets/pizza.jpg';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './style.scss'
const Food1 = () => {
  return (
    <div className='food-card-div'>
        <img className='food-img' src={pizza} alt='pizza' />
        <div className='details-div'>
          <div className='text-div'>
            <h3 className='name'>Name</h3>
            <h3  className='price'> Price</h3>
            
          </div>
          <div className='button'>
            <button><ThumbUpAltIcon /> LIKE </button>
            <button> <ThumbDownIcon /> DISLIKE </button>

          </div>
        </div>
    </div>
  )
}

export default Food1