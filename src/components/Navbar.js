import { Component } from "react";
import "../components/NavbarStyles.css";
class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render () {
    return (
      <div>
       <nav>
        <div>
            <a href="index.html">
               <img src="./nav-logo.svg" alt="logo" className="logo"/>
            </a>
        </div>
   
        <ul id="navbar" className={this.state.clicked ? 
        "#navbar active" : "#navbar"}>
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Contact</a></li>
            <li><a href="index.html">Pricing</a></li>
            <li><a href="index.html">Docs</a></li>
        </ul>

         <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ?
            "fas fa-times" : "fas fa-bars"}>
            </i>
       </div>
       </nav>
      </div>
    )
}
}
export default Navbar;