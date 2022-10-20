import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import About from "./About";
import Calculator from "./Calculator";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Calculator</h1>
                    <ul className="header">
                        <li><NavLink to ="/">Home</NavLink></li>
                        <li><NavLink to ="/stuff">Stuff</NavLink></li>
                        <li><NavLink to ="/About">About</NavLink></li>
                        <li><NavLink to ="/Calculator">Calculator</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/stuff" element={<Stuff/>}/>
                            <Route path="/About" element={<About/>}/>
                            <Route path="/Calculator" element={<Calculator/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;