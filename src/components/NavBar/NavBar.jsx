import "./Nav.css"
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TrackMaster+
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Classes
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      My Classes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Archive Classes 
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      New Class
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
           
          </div>
          <div className="profile_button">
          <li className="nav-item">
                <a className="nav-link navbar-profile" href="/">
                {/* <i class="fa-solid fa-circle-user"></i> */}
                <i class="fa-solid fa-user-large"></i>
                </a>
              </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
