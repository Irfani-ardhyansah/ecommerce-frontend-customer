import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }
    let navigate = useNavigate()

    const sendData = async (e) => {
        const formData = new FormData()             
        formData.append("name", e.name)
        formData.append("address", e.address)
        formData.append("phone", e.phone)
        formData.append("email", e.email)
        formData.append("password", e.password)
        formData.append("birthday", e.birthday)
        formData.append("gender", e.gender)


        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DOMAIN}/api/register`,
            data: formData,
            headers: config.headers,
        })

        if(result.data.status == 200) {
            navigate('/')
        }
    }

    return (
        <>
            <div class="loginContainer">
                <div class="card loginCard">
                    <div class="loginTitle d-flex justify-content-between">
                        <h3>Register</h3>
                        <Link to="/" class="loginLink">Login</Link>
                    </div>
                    <form class="mt-3" onSubmit={handleSubmit(sendData)}>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Email..." isInvalid={!!errors.email} {...register("email", { required: true })} />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Name..." isInvalid={!!errors.name} {...register("name", { required: true })} />
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-6">
                                    <label class="form-label">Gender</label>
                                    <select class="form-control" {...register("gender", { required : true })}>
                                        <option selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Date Of Birth</label>
                                    <input type="date" class="form-control" {...register("birthday", { required: true })} /> 
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-6">
                                    <label class="form-label">Address</label>
                                    <input type="text" class="form-control" placeholder="Address..." isInvalid={!!errors.address} {...register("address", { required: true })} />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Phone</label>
                                    <input type="number" class="form-control" placeholder="082..." isInvalid={!!errors.phone} {...register("phone", { required: true })} />
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-12">
                                    <label class="loginLabel">Password</label>
                                    <input type="password" class="form-control" placeholder="Pass..." isInvalid={!!errors.password} {...register("password", { required: true })} />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <button class="btn btn-secondary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;