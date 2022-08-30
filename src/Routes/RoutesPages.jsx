import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import HomeButtons from "../Pages/HomeButtons";
import Record from "../Pages/Record";
import ShoppingMode from "../Pages/ShoppingMode";
import ViewLists from "../Pages/ViewLists";
import Admin from "../Pages/Admin";
import CreateEdit from "../Pages/CreateEdit";
import Outstanding from "../Pages/Outstanding";
import Error from "../Pages/Error";

function RoutesPagesComponent (){
    return (
        <Routes>
            <Route  path='/' element={<div>
                <HomeButtons></HomeButtons>
                <Record></Record>
            </div>}/>
            <Route  path='/view-lists' element={<ViewLists></ViewLists>}/>
            <Route  path='/shopping-mode' element={<ShoppingMode></ShoppingMode>}/>
            <Route  path='/create-edit' element={<CreateEdit></CreateEdit>}/>
            <Route  path='/historial' element={<Outstanding></Outstanding>}/>
            <Route  path='/admin' element={<Admin></Admin>}/>
            <Route  path='*' element={<Error></Error>}/>
        </Routes>
    )
}

export default RoutesPagesComponent;