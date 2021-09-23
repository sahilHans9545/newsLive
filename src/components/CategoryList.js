import React, { useState } from "react";
import "../css/index.css"
import { Link,NavLink } from "react-router-dom";

const CategoryList=()=>{
    return (
        <>
        <h1>CATEGORIES</h1>
                <div className="category-list">
                    <ul>
                        <li><NavLink activeClassName="active-category" to="/sports">Sports</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Lifestyle">Lifestyle</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Love">Love</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Travel">Travel</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Technology">Technology</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Art">Art</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Photography">Photography</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Design">Design</NavLink></li>
                        <li><NavLink activeClassName="active-category" to="/Dramas">Dramas</NavLink></li>
                    </ul>
                </div>

                <h1>Tags</h1>
                <div className="tags flex-bw">
                    <button>FOOD</button>
                    <button>PHOTOGRAPHY</button>
                    <button>BUSINESS</button>
                    <button>LOVE</button>
                    <button>ART</button>
                    <button>OTHERS</button>
                </div>

                <br />
                <h1>Search our Blogs...</h1>
                <div className="search" style={{marginTop:"20px"}}>
                    <input type="text" placeholder="Search Here..." />
                    <i className="fab fa-searchengin"></i>
                </div>
                
                </>
    )
}

export default CategoryList