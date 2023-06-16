import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{backgroundColor: "#e3f2fd"}}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          
          <div className="collapse navbar-collapse " id="navbarNav" style={{display:"flex",justifyContent:'flex-end',flexDirection:'row'}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Create Note
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all">
                  All Note
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/update">
                  Update
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
