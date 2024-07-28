import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/sportsLogo.jpg'

export default function Login() {

    const navigate = useNavigate()

    function handleSubmit() {
        localStorage.setItem("auth", JSON.stringify(true))
        navigate("/user")
    }

    return (
        <div className="loginContainer">
            <div className="loginCard">
                <img className='loginLogo' src={logo} alt="logo" />
                <TextField id="un" label="User ID" variant="outlined" />
                <TextField id="psw" label="password" variant="outlined" />
                <Button variant="contained" onClick={handleSubmit}>Login</Button>
            </div>
        </div>
    )
}
