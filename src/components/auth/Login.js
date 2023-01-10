import './Login.css'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }
    let navigate = useNavigate();

    const sendData = async (e) => {
        // const dataLogin = {'email' : e.email, 'password' : e.pass}
        // const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/login`, dataLogin)

        const formData = new FormData()   
        formData.append("email", e.email);
        formData.append("password", e.password);

        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DOMAIN}/api/login`,
            data: formData,
            headers: config.headers,
        });

        if(result.status == 200) {
            localStorage.setItem('dataLogin', JSON.stringify(result.data.data));
            navigate('/dashboard')
        }
    }

    return (
        <>
            <div class="loginContainer">
                <div class="card loginCard">
                    <div class="loginTitle d-flex justify-content-between">
                        <h3>Login</h3>
                        <Link to="/register" class="loginLink">Register</Link>
                    </div>
                    <form class="mt-3" onSubmit={handleSubmit(sendData)}>
                        <div class="container">
                            <div class="row">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Email..." isInvalid={!!errors.email} {...register("email", { required: true })} />
                            </div>
                            <div class="row mt-2">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="Pass..." isInvalid={!!errors.password} {...register("password", { required: true })} />
                            </div>
                            <div class="row mt-3">
                                <button class="btn btn-secondary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;