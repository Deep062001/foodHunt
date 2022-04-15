import React from 'react';

import pizza from '../../../assets/pizza.jpg';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './style.scss'
const Food1 = ({foodPost}) => {
  return (
    <div className='food-card-div'>
        <img className='food-img' src={foodPost.selectedFile} alt='pizza' />
        <div className='details-div'>
          <div className='text-div'>
            <h3 className='name'>{foodPost.name}</h3>
            <h3  className='price'> Price</h3>
            
          </div>
          <div className='button'>
            <button onClick={() => {}}><ThumbUpAltIcon /> LIKE {foodPost.likeCount} </button>
            <button> <ThumbDownIcon /> DISLIKE </button>

          </div>
        </div>
    </div>
  )
}

export default Food1