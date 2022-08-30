import React from "react";
import { Link } from "react-router-dom";

function HomeButtons (){
    return (
        <div>
            <Link to="/">logOut</Link>
            <ul>
                <li><Link to="/home/create-edit">Crear nueva lista</Link></li>
                <li><Link to="/home/view-lists">Ver mis listas</Link></li>
                <li><Link to="/home/historial">Ver historial</Link></li>
            </ul>
        </div>
    )
}

export default HomeButtons;