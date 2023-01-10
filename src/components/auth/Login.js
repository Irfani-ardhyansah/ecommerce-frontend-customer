import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div class="loginContainer">
                <div class="card loginCard">
                    <div class="loginTitle d-flex justify-content-between">
                        <h3>Login</h3>
                        <Link to="/register" class="loginLink">Register</Link>
                    </div>
                    <form class="mt-3">
                        <div class="container">
                            <div class="row">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Email..." />
                            </div>
                            <div class="row mt-2">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="Pass..." />
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