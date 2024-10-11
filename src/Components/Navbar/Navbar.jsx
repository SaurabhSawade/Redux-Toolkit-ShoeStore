import React from "react";
import './Navbar.css'
function Navbar(){
    return (
        <>
        <div className="nav h-24">
        <div>
            Logo
        </div>
        <ul className="list ml-3">
           <li>Home</li>
           <li>Categorise</li>
           <li>About Us</li>
        </ul>
        </div>
        </>
    )
}
export default Navbar;