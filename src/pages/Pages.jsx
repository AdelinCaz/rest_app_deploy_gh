import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import {Routes, Route} from "react-router-dom";
import Searched from '../pages/Searched';
import Recipe from './Recipe';





function Pages() {
  return (
    <Routes>
      <Route path="/rest_app_deploy_gh" element={<Home/>} />
      <Route path="/cuisine/:type" element={<Cuisine/>} />
      <Route path="/searched/:search" element={<Searched/>} />
      <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
  )
}
export default Pages
