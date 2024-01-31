import React, { Component } from 'react'
import { Link } from "react-router-dom";
import navbarlogo from './newsinvert.png'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style = {{backgroundColor : 'black' , fontFamily : 'News Cycle' , fontSize : '1.15rem'}}>
          <Link className="navbar-brand" to="/"><img src={navbarlogo} alt="logo" height = '35px' style = {{paddingRight : '13px', cursor : 'pointer'}}/>NewsWorld</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/General">General</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/Business">Business</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/Health">Health</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/Science">Science</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/Technology">Technology</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
