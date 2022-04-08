import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './ShopsDiv.scss';
const ShopsDiv = () => {
  return (
    <div className='outer-div'>
        <ShopCard />
        <ShopCard />
        <ShopCard />
    </div>
  )
}

export default ShopsDiv