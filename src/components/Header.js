import React from "react";
import "../css/index.css"
import { Link } from "react-router-dom";

const Header=(props)=>{
   
   const Input=()=>{
       let inputtext=document.querySelector(".search input").value;
       props.editInput(inputtext);
   }

    return (
        <div className="header">
            <div className="MenuBar flex-bw">
                <div className="logo">
                    <h1>Live Life</h1> 
                </div>
                <div className="menu">
                    <ul className="flex">
                        <li className={props.active==="Home"?"active-menu":0}><Link to="/">Home</Link></li>
                        <li className={props.active==="About"?"active-menu":0}><Link to="/about">About us</Link></li>
                        <li>Digitalising</li>
                        <li className={props.active==="Contact"?"active-menu":0}><Link to="/contact">Contact</Link></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>

            <div className="header-banner">
                <img src={`./images/${props.bannerImg}`} alt="banner" />
            </div>


           {props.search?<div className="search">
                <input type="text" placeholder="Search Here..." />
                <i className="fab fa-searchengin" onClick={Input}></i>
            </div> : null} 
        </div>
    )
}

export default Header