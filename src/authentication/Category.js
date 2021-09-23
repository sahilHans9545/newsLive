import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Posts from "../components/Post";

const Category=(props)=>{
    console.log(props.category)

    let [details,updatedDetails]=useState([]);
    let [PageNum,updatePageNum]=useState(1)

    useEffect(()=>{
        const xhr=new XMLHttpRequest();
        xhr.open("GET",`https://newsapi.org/v2/everything?q=${props.category}&from=2021-08-27&to=2021-08-27&sortBy=popularity&apiKey=52753881854b46fea51835147edbe943&pageSize=6&page=${PageNum}`)
        xhr.addEventListener("load",()=>{
            let data=JSON.parse(xhr.response);
            updatedDetails(data.articles);
        })
        xhr.send()
        
    },[props.category])
    
    
    
    return (
        <>
        
        <div className="home">
            <div className="left-section">
                
            <CategoryList />

                
            </div>
            <div className="right-section">
                <h1 style={{textAlign:"center"}}>{props.category.toUpperCase()}</h1>
                <Posts details={details}/>
            </div>
        </div>
        </>
    )
}

export default Category