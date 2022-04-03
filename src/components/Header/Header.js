import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='outer-div-header'>
      <div className='header-div'>
        <div className='logo'>foodHunt</div>
        <div className='nav-div'>
          <p>Home</p>
          <p>Food Addas</p>
          <p>Suggest Places</p>
        </div>
        <div className='sign-in-div'>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header