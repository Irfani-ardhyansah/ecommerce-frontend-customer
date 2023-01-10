import './Navbar.css'
import { MdShoppingCart, MdMessage, MdCategory, MdOutlineSearch } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('dataLogin')
    const dataLogin = JSON.parse(isAuthenticated)
    let navigate = useNavigate();
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-10" style={{position: 'sticky', top: 0, zIndex: 1}}>
                <div class="container py-2">
                    <a class="navbar-brand" href="#">
                        <h3>Navbar</h3>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div style={{marginLeft: '27%'}}>
                        <form class="d-flex">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-secondary" type="submit"> 
                                <MdOutlineSearch />
                            </button>
                        </form>
                    </div>
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link me-2" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <MdCategory />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <MdShoppingCart />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-2" href="#">
                                    <MdMessage />
                                </a>
                            </li>
                            <div class="v-hr me-2"></div>
                            {/* Login  */}
                            {isAuthenticated ? 
                            <>
                            <li class="nav-item">
                                <a class="nav-link" href="#">{dataLogin.user.detail.name}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => logout()}>Log out</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            </> : 
                            <>
                                <li class="nav-item me-2">
                                    <button class="btn btn-outline-secondary" type="submit"> 
                                        Login
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-secondary" type="submit"> 
                                        Register
                                    </button>
                                </li>
                            </>}
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* Not Login Yet */}
                            {/* <li class="nav-item me-2">
                                <button class="btn btn-outline-secondary" type="submit"> 
                                    Login
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-secondary" type="submit"> 
                                    Register
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar