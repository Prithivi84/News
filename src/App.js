
import './App.css';
import Navbar from './component/navbar';
import News from './component/news';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
// import About from './component/about';


import React, { Component } from 'react'

export default class App extends Component {
 
  render() {
    return (
      <>
      <Router>
      
      <Navbar></Navbar>
       <Routes>
          <Route exact path="/" element={<News country="us" category="general"></News>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
              <Route exact path="/business" element={<News key="business" country="in" category="business" />} />
              <Route exact path="/general" element={<News key="general" country="in" category="general" />} />
              <Route exact path="/health" element={<News key="health" country="in" category="health" />} />
              <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />


              
         
        </Routes>
      </Router>
      </>
      
    )
  }
}