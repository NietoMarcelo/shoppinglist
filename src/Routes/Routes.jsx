import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Error from "../Pages/Error";

function RoutesLogComponent (){
    return (
        <Routes>
          <Route  path='/' element={<Login></Login>}/>
          <Route  path='/register' element={<Register></Register>}/>
          <Route  path='/home/*' element={<Home></Home>}/>
          <Route  path='*' element={<Error></Error>}/>
        </Routes>
    )
}

export default RoutesLogComponent;