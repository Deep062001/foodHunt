import React from 'react'
import Pizza from '../../assets/pizza2.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './ShopCard.scss';

const ShopCard = ({shopData}) => {
  return (
    <div className='outer-card-div'>
        <img className='shop-img' src={shopData.selectedFile} alt={shopData.name} />
        <div className='details-div'>
          <div className='text-div'>
            <h3>{shopData.name}</h3>
            <p>{shopData.description} </p>
            {/* <div className='location-div'>
              <LocationOnIcon className='icon'/> 
              <p>Kashmere Gate</p>
            </div> */}
          </div>
          <div className='explore-dish-div'>
          <div className='location-div'>
              <LocationOnIcon className='icon'/> 
              <p>{shopData.location}</p>
            </div>
            <button>Food Items</button>
          </div>
        </div>
    </div>
  )
}

export default ShopCard