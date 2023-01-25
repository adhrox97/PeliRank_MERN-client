import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Login from './Login';
import Registro from "./Registro";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact></Route>
                <Route path="/home" element={<Home/>} exact></Route>
                <Route path="/registro" element={<Registro/>} exact></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;