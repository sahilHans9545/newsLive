import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import Posts from "../components/Post";

const Home=(props)=>{

   
    let [details,updatedDetails]=useState([]);
    let [pageNum,updatedpageNum]=useState(1);
    let [loading,updatedloading]=useState(false);
    let [search,editInput]=useState("")
    let [error,updateError]=useState(false);
    // let [PageNum,updatePageNum]=useState(1);

    const dt=new Date();
    let month=dt.getMonth();
    let year=dt.getFullYear();
    let date=dt.getDate();
    let fulldate=`${year}-${month}-${date}`;

    useEffect(()=>{
        const xhr=new XMLHttpRequest();
        let url;
        if(search){
            url=`https://newsapi.org/v2/everything?q=${search}&from=${fulldate}&sortBy=publishedAt&apiKey=850c5e8a89d34c4fabc99688f54f6a7c`
        }
        else{
            url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=52753881854b46fea51835147edbe943&pageSize=6`
        }
        xhr.open("GET",url);
        xhr.addEventListener("load",()=>{
            let data=JSON.parse(xhr.response);
            updatedDetails(data.articles);
            console.log(data.totalResults)
            if(data.articles.length==0){
                updateError(true);
            }
            else{
                updateError(false)
            }
        })
        xhr.send();
        
        
    },[pageNum,search])

    

   
    return (
        <>
        <Header active="Home" bannerImg="Home-banner.svg" search editInput={editInput} loading={updatedloading}/>
        <div className="home">
            <div className="left-section">
               <CategoryList/>
            </div>
            <div className="right-section">
                <h1 style={{textAlign:"center"}}>{search?`News related to ${search}`:"Todays Top Headlines of India..."}</h1>
                {error?<h2>OOps! Data Not Found</h2>:null}
                {loading?null:<Posts details={details} />}
                {loading==true? <img src="images/loader.gif" alt="" />:null}
            </div>
        </div>
        </>
    )
}

export default Home