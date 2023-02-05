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
    let navigate = useNavigate()
    const [statusAlert, setStatusAlert] = useState(false)
    const { state }         = useLocation();
    const [alertData] = useState(state)


    useEffect(() => {
        if(alertData) {
            setStatusAlert(!statusAlert)
            setTimeout(() => {
                setStatusAlert(statusAlert)
            }, 6000)
        }
    }, [alertData])

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
            if(result.data.data.user.role == 'customer') {
                localStorage.setItem('dataLogin', JSON.stringify(result.data.data));
                navigate('/dashboard')
            } else {
                console.log('akun role bukan customer')
            }
        }
    }

    return (
        <>
            <div className="loginContainer">
                <div className="card loginCard">
                    {
                        statusAlert && 
                            <div className="alert alert-danger" role="alert">
                            {
                                alertData.alert 
                                ? alertData.alert.message    
                                : alertData.alert_exp.message
                            }
                            </div>
                    }
                    <div className="loginTitle d-flex justify-content-between">
                        <h3>Login</h3>
                        <Link to="/register" className="loginLink">Register</Link>
                    </div>
                    <form className="mt-3" onSubmit={handleSubmit(sendData)}>
                        <div className="container">
                            <div className="row">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Email..." isInvalid={!!errors.email} {...register("email", { required: true })} />
                            </div>
                            <div className="row mt-2">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Pass..." isInvalid={!!errors.password} {...register("password", { required: true })} />
                            </div>
                            <div className="row mt-3">
                                <button className="btn btn-secondary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;