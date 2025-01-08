import React from "react";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="contain">
        <div className="row flex_row">
          {/* Contact Us Section */}
          <div className="col column1">
            <div className="h5">Contact us</div>
            <ul className="info_list">
              <li>
                <a href="tel:0934289238">
                  <img src="/images/phone_icon.svg" alt="Phone Icon" className="icon" /> 
                  093 428 9238
                </a>
              </li>
              <li>
                <a href="mailto:contact@info.com">
                  <img src="/images/email_icon.svg" alt="Email Icon" className="icon" /> 
                  contact@info.com
                </a>
              </li>
            </ul>
            <ul className="social_list">
              <li><a href="https://www.facebook.com" target="_blank" aria-label="Facebook"><img src="/images/social_facebook.svg" alt="Facebook Icon" className="icon" /></a></li>
              <li><a href="https://www.twitter.com" target="_blank" aria-label="Twitter"><img src="/images/social_twitter.svg" alt="Twitter Icon" className="icon" /></a></li>
              <li><a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn"><img src="/images/social_linkedin.svg" alt="LinkedIn Icon" className="icon" /></a></li>
              <li><a href="https://www.instagram.com" target="_blank" aria-label="Instagram"><img src="/images/social_instagram.svg" alt="Instagram Icon" className="icon" /></a></li>
              <li><a href="https://www.pinterest.com" target="_blank" aria-label="Pinterest"><img src="/images/social_pinterest.svg" alt="Pinterest Icon" className="icon" /></a></li>
            </ul>
          </div>
          {/* Short Links Section */}
          <div className="col column2">
            <div className="h5">Short Links</div>
            <ul className="list">
              <li><a href="index">Home</a></li>
              <li><a href="about">About us</a></li>
              <li><a href="catalog">Catalog</a></li>
              <li><a href="blogs">Blogs</a></li>
              <li><a href="account">My Account</a></li>
              <li><a href="help">Help</a></li>
              <li><a href="contact">Contact us</a></li>
            </ul>
          </div>
          {/* Mailing List Section */}
          <div className="col column3">
            <div className="h5">Join Our Mailing List</div>
            <p className="small">Stay up to date with the latest news and deals!</p>
            <form action="" method="POST">
              <div className="form_blk input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="site_btn simple sm">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="copyright">
          <p>© Copyright 2023 <a href="index">Tracksuit.</a> All Rights Reserved.</p>
          <ul className="mini_list">
            <li><a href="terms-conditions">Terms and conditions</a></li>
            <li><a href="privacy-policy">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      {/* Popup Offer */}
      <div className="popup offer_popup" data-popup="offer">
        <div className="table_dv">
          <div className="table_cell">
            <div className="_inner">
              <button className="x_btn" aria-label="Close Popup"></button>
              <div className="flex">
                <div className="colL">
                  <div className="inner">
                    <img src="/images/products/02.jpg" alt="Product Photo" />
                  </div>
                </div>
                <div className="colR">
                  <div className="content">
                    <h3 className="title">Mega Marni Bowling Shirt in Lily White</h3>
                    <div className="brand fw_600">Artikelnummer: 7263</div>
                    <div className="stock_status green_text">In stock</div>
                    <div className="price">$53.99 <del>$98.99</del></div>
                    <hr />
                    <h6>What offer will you make?</h6>
                    <input type="text" className="input" name="offer" placeholder="Enter your offer" />
                    <div className="btn_blk">
                      <button className="site_btn">Make Offer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

</>

  );
};

export default Footer;
