import './Login.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div class="loginContainer">
                <div class="card loginCard">
                    <div class="loginTitle d-flex justify-content-between">
                        <h3>Register</h3>
                        <Link to="/" class="loginLink">Login</Link>
                    </div>
                    <form class="mt-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Email..." />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Name..." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label class="form-label">Address</label>
                                    <input type="text" class="form-control" placeholder="Address..." />
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Phone</label>
                                    <input type="number" class="form-control" placeholder="082..." />
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-12">
                                    <label class="loginLabel">Password</label>
                                    <input type="password" class="form-control" placeholder="Pass..." />
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