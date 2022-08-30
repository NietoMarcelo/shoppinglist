import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login (){
    return (
        <div>
            <h2>Login</h2>
            <Link to="/home"><Button>Log</Button></Link>
            <Link to="/register">Creat usuario</Link>
        </div>
    )
}

export default Login;