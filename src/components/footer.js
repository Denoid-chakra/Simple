import React from 'react';
import {Link, link} from 'react-router-dom';
import './footer.css'
export default function Footer(self){
return(

<>
<div className="footer-clean" id="fitter">
        <footer >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <a  href="https://www.youtube.com/c/TIMECREATORS"><i id="bek1"  className="icon ion-social-facebook" > </i></a>
                        <a id="bek2" href={"https://www.youtube.com/watch?v=ITklrIVGLSg&t=11s"} ><i className="icon ion-social-twitter"></i></a>
                        <a id="bek3" href={"WWW.facebook.com"}><i className="icon ion-social-snapchat"></i></a>
                        <p className="copyright">Time Creators © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</>
);
}