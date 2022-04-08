
import React, { useState, useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import FileUploader from './FileUploader';
 import './form.scss';
const Forms = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    
  };
  return (
    <div className="form">
    <div className='heading1' style={{textAlign: "center"}}> What's Your Favourite Food ??</div>
      <form className='form1'>
      <label className='label'>
    Name of The Food Item:
   
    </label>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />


  
  <label className='label'>

    Price of The Food Item: 
    </label>
    <input
    type="text"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />
  

  
       
        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        <button className = 'button1' onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};


export default Forms;