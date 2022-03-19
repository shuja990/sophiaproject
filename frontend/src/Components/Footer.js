import React from "react";

const Footer = () => {
  return (
    <footer className="" role="contentinfo">
      <div className="footer-middle">
        <div className="container d-flex justify-content-center ">
          <div className="row">
            <div className="col-md-12 ">
              <h4>Follow Us</h4>
              <ul className="social-network social-circle">
                <li>
                  <a href="#" className="icoFacebook" title="Facebook">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="" title="Instagram">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="" title="TikTok">
                    <i className="fa-brands fa-tiktok" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">
              Copyright © {new Date().getFullYear().toString()} - The Wave. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
