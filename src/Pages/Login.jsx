import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from "../Assets/logo.jpg";
import "./Login.css";
import { useState } from "react";

function Login (){

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fullUser, setFullUser] = useState([]);
    const [showIcon, setShowIcon] = useState(faEye);
    const [value, setValue] = useState(true);

    const onChangeIcon = () => {
        setValue(!value);
        setShowIcon(value ? faEyeSlash : faEye);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passHandler = (event) => {
        setPass(event.target.value);
    }

    const login = (email, pass) => {
        let full = [email, pass];
        setFullUser(full);
        console.log(full);
    }

    return (
        <div>
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="centerCard">
            <Card>
                <Card.Body>
                    <form onSubmit={ev => {ev.preventDefault(); login(email, pass);}}>
                    <div style={{paddingTop: '5px'}}>
                        <span>User: </span>
                        <input value={email} onChange={emailHandler}/>
                    </div>
                    <div style={{paddingTop: '15px'}}>
                        <span>Pass: </span>
                        <input value={pass} onChange={passHandler} style={{position: 'relative'}} type={value ? 'password' : 'text'}/>
                        <FontAwesomeIcon style={{
                            paddingLeft: '5px', position: 'absolute',
                            left: '81.5%', top: '49%',
                            transform: 'translateY(-50%)'
                        }} icon={showIcon} onClick={onChangeIcon}/>
                    </div>
                    <div className="footerButtons">
                        <Link to="/home">
                            <Button style={{
                            backgroundColor: 'orange',
                            borderColor: 'orange'
                        }} type="submit">Login</Button>
                        </Link>
                        <Link to="/register" style={{paddingLeft: '15px'}}><Button style={{
                            backgroundColor: 'orange',
                            borderColor: 'orange'
                        }}>Registrarse</Button></Link>
                    </div>
                    </form>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Login;