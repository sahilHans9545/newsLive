import React from "react";
import "../css/index.css"

const Posts=(props)=>{

    // console.log(props.details,"post.js");

    return (
            <>
            <div className="Posts flex-bw">
            
              {props.details.map((element)=>{
                    return (
                        
                        <div className="post" key={element.url}>
                    <div className="postImg">
                    {/* <div className="post-date">26 Aug,2021</div> */}
                        <img src={element.urlToImage?element.urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2021/08/getty-app-store-760x380.jpg"       } alt="" />
                    </div>
    
                    <div className="post-details">
                        <h3>{element.title.slice(0,20)}...</h3>
                        <div className="flex-bw">
                            <h4>author: {element.author}</h4>
                            <h4>{element.publishedAt}</h4>
                        </div>

                        <p>{element.content}</p>
    
                        <button><a href="">Read More</a></button>
                    </div>
                    
                </div>
                    )
              })}
              
            </div>

            
               </>
    
        )
    }



export default Posts