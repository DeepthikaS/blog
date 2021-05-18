import React from 'react'
import './blog.css'

class Navbar extends React.Component{
    render(){
        return(
            <div class="w3-content" style={{maxWidth:"1400px"}}>
                {/* <!-- Header --> */}
                <header class="w3-container w3-center w3-padding-32"> 
                    <h1><b>MY BLOG</b></h1>    
                </header>

                <header>
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                        <a class="navbar-brand " href=""><img src="./logo.png" width="250px" height="80px" alt=""/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ml-auto" style={{fontSize: "20px"}} >
                                <li class="nav-item ">
                                    <a class="nav-link" href="/index.html"><strong>Home</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/price.html"><strong>packages</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/blog.html"><strong>blog</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about.html"><strong>about us</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contactus.html"><strong>contact us</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/signup.html"><strong>signup</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login.html"><strong>login</strong></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/addtocart.html"><strong>cart</strong></a>  
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar