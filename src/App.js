import React from 'react'
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from './Pages/Items/Items';
import Suggest from './Pages/Shopsuggestion/Suggest';

const App = () => {
  return (
    <div>
            <Router>
                <Routes>
                <Route path="/" exact element={<MainPage />} />
               
                    <Route path="/items" exact element={<Items />} />
                    <Route path="/suggest" exact element={<Suggest/>} />
                </Routes>
            </Router>
       
        </div>
  )
}

export default App