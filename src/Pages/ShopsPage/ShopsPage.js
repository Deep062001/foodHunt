import React from 'react'
import AddShopForm from '../../components/AddShopForm/AddShopForm';
import ShopsDiv from '../../components/ShopsDiv/ShopsDiv';
import './ShopsPage.scss';


const ShopsPage = () => {
  return (
    <div className='shops-page-outer-div'>
        <ShopsDiv />

        <AddShopForm />
    </div>
  )
}

export default ShopsPage