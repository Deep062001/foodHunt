import React from 'react';
import Forms from "../../components/Form/Form";
import Foods from "../../components/Foods/Foods";
import Header from '../../components/Header/Header';
import './Items.scss';
const Items = () => {
  return (
    <div className='explore-page'>
    <div> <Header /></div>
    <div className='Items'>
    
    <div className='Food'> 
    <Foods /></div>
    <div className='Form'>
    <Forms />
    </div>
    </div>
</div>
  )
    
}

export default Items;