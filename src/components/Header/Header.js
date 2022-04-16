import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <div className='outer-div-header'>
      <div className='header-div'>
        <div className='creme-div'>
          <div className='logo'>foodHunt</div>
          <div className='nav-div'>
            
            <NavLink className='link' to="/"><p>Home</p></NavLink>
            <NavLink className='link' to="/shops"><p>Food Addas</p></NavLink>
            <NavLink className='link' to="/suggest"><p>Suggest Places</p></NavLink>

          </div>
        </div>
        <div className='sign-in-div'>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header