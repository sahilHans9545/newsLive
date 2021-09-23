import React from "react";
// import Home from "./authentication/Home";
import About from "./authentication/About";
import Contact from "./authentication/Contact"
import { BrowserRouter,Switch,Route} from "react-router-dom";
// import Category from "./authentication/Category";

function App(){
    return (
        <>
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={Home}></Route> */}
                <Route path="/about" component={About} ></Route>
                {/* <Route path="/sports"><Category category="Sports"/></Route>
                <Route path="/Lifestyle"><Category category="lifestyle" /></Route>
                <Route path="/Love"><Category category="love"/></Route>
                <Route path="/Travel"><Category category="travel"/></Route>
                <Route path="/Technology"><Category category="technology"/></Route>
                <Route path="/Art"><Category category="art"/></Route>
                <Route path="/Photography"><Category category="photography"/></Route>
                <Route path="/Design"><Category category="design"/></Route>
                <Route path="/Dramas"><Category category="dramas"/></Route> */}
                <Route path="/contact" component={Contact}/>

            </Switch>
        </BrowserRouter>
        </>
    )
}

export default App














 