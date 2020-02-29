import React from "react";
import Navbar from "../Navbar";
import "../../pages/about.css";

function Header(){
    return(
        <>
        <Navbar/>
        <header className="row justify-content-center">
            <div className="col-2"></div>
            <div className="col-3">
                <img src="./files/ProfilePic1.jpg" alt="profile-pic" id="profile-pic" />
            </div>
        </header>
        </>
    );
}

export default Header;