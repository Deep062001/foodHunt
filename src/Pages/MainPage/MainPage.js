import React from 'react'
import LandingSection from '../../components/LandingSection/LandingSection'
import ShopsDiv from '../../components/ShopsDiv/ShopsDiv'
import Header from '../../components/Header/Header';
const MainPage = () => {
  return (
    <div>
      <Header/>
      <LandingSection/> 
      <ShopsDiv/>
    </div>
  )
}

export default MainPage