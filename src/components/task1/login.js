import React from "react";
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons";
export function Five(){
    return(
      <>  
            <div className="her" container>
                <div className="her1 row">
                    <div className="her2 col-lg-6 mt-5">
                    <img src="https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-260nw-164253011.jpg" className="her3"/>
                    </div>
                        <div className="her4 col-lg-6 mt-5">
                            <h1>Member Login</h1><br/><br/>
                        
                            <FontAwesomeIcon icon={faEnvelope} /><input type="text" id="user" placeholder="Email"/><br/><br/>
                            <FontAwesomeIcon icon={faLock} /><input type="password" id="pass" placeholder="...."/><br/><br/>
                            
                            <button>LOGIN</button><br/><br/>
                            <nav>
                                <ul>
                                    <li>Forgot</li>
                                    <li className="her5"> Username / password ?</li><br/>
                                </ul>
                            </nav>
                             <div className="her6">Create your account<FontAwesomeIcon icon={faArrowRight} /></div>                  
                        </div>
                    
                </div>
            </div>

       </> 
    );
}