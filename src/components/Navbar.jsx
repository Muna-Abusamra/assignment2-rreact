function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#8fa03a"}}>
            <div className="container">
                <a className="navbar-brand text-white opacity-75 fw-bold fs-3" href="#">SoftSkin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav me-auto ms-4">
                        <li className="nav-item"><button className="nav-link text-white opacity-75" >Learn</button></li>
                        <li className="nav-item"><button className="nav-link text-white opacity-75" >Explore</button></li>
                        <li className="nav-item"><button className="nav-link text-white opacity-75" >Contact</button></li>
                    </ul>
                    <ul className="navbar-nav align-items-center gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-white opacity-75" href="#">
                                <i className="bi bi-cart fs-5"></i> cart
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white opacity-75 dropdown-toggle" href="#"
                               data-bs-toggle="dropdown">
                                <i className="bi bi-globe fs-5"></i> EN
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">English</a></li>
                                <li><a className="dropdown-item" href="#">العربية</a></li>
                                <li><a className="dropdown-item" href="#">Deutsch</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white opacity-75 dropdown-toggle" href="#"
                               data-bs-toggle="dropdown">
                                <i className="bi bi-person-circle fs-5"></i> Logged in as Samer
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;