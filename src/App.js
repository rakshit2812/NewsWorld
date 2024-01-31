import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  APIkey = "74d78060ce0a4bfb946d2e26330aa783";
  state = {progress : 0}
  setProgress = (progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
      <BrowserRouter>
          <Navbar/>
          <LoadingBar
            color='#be1e1e'
            progress={this.state.progress}
            height={4}
          />
          <Routes>
            <Route exact path = "/" element = {<News setProgress = {this.setProgress} key = "General" pageSize={this.pageSize} APIkey = {this.APIkey} country = "in" category = "General"/>}/>
            <Route exact path = "/Science" element = {<News setProgress = {this.setProgress} key = "Science" pageSize={this.pageSize} APIkey = {this.APIkey} country = "in" category = "Science"/>}/>
            <Route exact path = "/Entertainment" element = {<News setProgress = {this.setProgress} key = "Entertainment" pageSize={this.pageSize} APIkey = {this.APIkey} country = "in" category = "Entertainment"/>}/>
            <Route exact path = "/Sports" element = {<News setProgress = {this.setProgress} key = "Sports" pageSize={this.pageSize} country = "in" APIkey = {this.APIkey} category = "Sports"/>}/>
            <Route exact path = "/Health" element = {<News setProgress = {this.setProgress} key = "Health" pageSize={this.pageSize} country = "in" APIkey = {this.APIkey} category = "Health"/>}/>
            <Route exact path = "/Business" element = {<News setProgress = {this.setProgress} key = "Business" pageSize={this.pageSize} country = "in" APIkey = {this.APIkey} category = "Business"/>}/>
            <Route exact path = "/Technology" element = {<News setProgress = {this.setProgress} key = "Technology" pageSize={this.pageSize} country = "in" APIkey = {this.APIkey} category = "Technology"/>}/>
            <Route exact path = "/General" element = {<News setProgress = {this.setProgress} key = "General" pageSize={this.pageSize} country = "in" APIkey = {this.APIkey} category = "General"/>}/>
          </Routes>
      </BrowserRouter>
      </div>
      
    )
  }
}


