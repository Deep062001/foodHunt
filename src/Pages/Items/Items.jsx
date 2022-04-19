import React, { useEffect } from 'react';
import Forms from "../../components/Form/Form";
import Foods from "../../components/Foods/Foods";
import { getFoodPost } from '../../actions/foodPost';
import './Items.scss';
import { useDispatch } from 'react-redux';
const Items = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFoodPost());
  }, [dispatch])

  return (
    <div className='explore-page'>
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