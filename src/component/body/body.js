import React from 'react';
import Menu  from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Contact2 from './contact2';

import {Navigate, Route, Routes } from 'react-router-dom';

const Body = () =>{
    return (
        <div>

            
           <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/" element={<Navigate to="/home"/>}/> 
                <Route path="/menu" element ={<Menu/>}/>
                <Route path="/contact" element ={<Contact/>}/>
                <Route path="/about" element ={<About/>}/>
                <Route path="/contact2" element ={<Contact2/>}/>

           </Routes>

        </div>
    )
}

export default  Body;