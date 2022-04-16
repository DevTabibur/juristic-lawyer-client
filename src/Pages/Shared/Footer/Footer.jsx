/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <>
            {/* footer */}
      <footer id="footer" className="footer py-5">
          <div className="container">
              <div className="row">

                  <div className="col-md-3">
                      <h3>Dress Mart</h3>
                      <li><span><i className="fa-solid fa-location-dot"></i></span>84 Main Rd E, St Albans
                        VIC 3021, Australia
                    </li>
                      <li><span><i className="fa-solid fa-envelope"></i></span>abc@gmail.com
                    </li>
                      <li><span><i className="fa-solid fa-phone"></i></span>+88 01307-588223
                    </li>
                    <div className="footer-social-media d-flex">
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-whatsapp-square"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram-square"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    </div>
                  </div>

                  <div className="col-md-2 categories-menu">
                      <h5>Categories</h5>
                      <div className="footer-social-media d-block">
                        <li><a href="#">Dress</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Shoes</a></li>
                    </div>
                  </div>

                  <div className="col-md-3 categories-menu">
                    <h5>Information</h5>
                    <div className="footer-social-media d-block">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Shipping & Delivery</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Open Store</a></li>
                  </div>
                </div>

                <div className="col-md-4 categories-menu">
                    <h5>Newsletter Signup</h5>
                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Enter your email" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">SUBSCRIBE</button>
                      </form>
                </div>

              </div>
          </div>
      </footer>

      {/* footer bottom */}
      <section id="footer-bottom" className="footer-bottom">
          <div className="container">
              <p className="text-center copyright py-3">Copyright © 2022 Dev Tabibur all rights reserved. Powered by The4</p>
              
          </div>
      </section>
        </>
    );
};

export default Footer;