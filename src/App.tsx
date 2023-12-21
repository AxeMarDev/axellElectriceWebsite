import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import NavButton from "./components/NavButton";
import Footer from "./components/Footer";

import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {

    const controller = useState("home")

    return (
        <BrowserRouter>
            <Banner/>
            <Navbar>
                <NavButton controller={controller} route={""}> home </NavButton>
                <NavButton controller={controller} route={"services"}> services </NavButton>
                <NavButton controller={controller} route={"projects"}> projects </NavButton>
                <NavButton controller={controller} route={"about"}> about    </NavButton>
            </Navbar>
            <Routes>
                <Route path={""} element={<Home/> }/>
                <Route path={"services"} element={<Services/> }/>
                <Route path={"projects"} element={<Projects/> }/>
                <Route path={"about"} element={<About/> }/>
                <Route path={"contact"} element={<Contact/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
