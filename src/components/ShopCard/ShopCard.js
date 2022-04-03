import React from 'react'
import Pizza from '../../assets/pizza2.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './ShopCard.scss';

const ShopCard = () => {
  return (
    <div className='outer-card-div'>
        <img className='shop-img' src={Pizza} alt='pizza' />
        <div className='details-div'>
          <div className='text-div'>
            <h3>Fire Water</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            <div className='location-div'>
              <LocationOnIcon className='icon'/> 
              <p>Kashmere Gate</p>
            </div>
          </div>
          <div className='explore-dish-div'>
            <button>Food Items</button>
          </div>
        </div>
    </div>
  )
}

export default ShopCard