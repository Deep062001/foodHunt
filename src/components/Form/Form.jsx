
import React, { useState, useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import FileUploader from './FileUploader';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createFoodPost } from '../../actions/foodPost';
 import './form.scss';
const Forms = () => {
  const[ foodPostData, setFoodPostData] = useState({
    name : '', price : '', selectedFile : ''
  });
const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createFoodPost(foodPostData));

  };
  return (
    <div className="form">
    <div className='heading1' style={{textAlign: "center"}}> What's Your Favourite Food ??</div>
      <form className='form1' onSubmit={handleSubmit}>
      <label className='label'>
    Name of The Food Item:
   
    </label>
    <input
    type="text"
    value={foodPostData.name}
    onChange={(e) => setFoodPostData({...foodPostData, name : e.target.value})}
  />


  
  <label className='label'>

    Price of The Food Item: 
    </label>
    <input
    type="text"
    value={foodPostData.price}
    onChange={(e) =>  setFoodPostData({...foodPostData, price : e.target.value})}
  />
  <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setFoodPostData({ ...foodPostData, selectedFile: base64 })} /></div>

  
       
      

        <button className = 'button1' type = "submit">Submit</button>
      </form>
    </div>
  );
};


export default Forms;