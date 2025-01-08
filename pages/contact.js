import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <>
      <Header />
      <>
      <section id="contact">
    <div id="bar">
      <div className="contain">
        <div className="content">
          <h1>Get In Touch With Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
      </div>
    </div>
    <div id="information">
      <div className="contain">
        <div className="wrapper">
          <div className="info">
            <h4>Contact Information</h4>
            <p>Say something to start a live chat!</p>
            <ul className="list mt-5">
              <li>
                <img
                  src="images/icon-phone.svg"
                  width={100}
                  height={100}
                  alt="Phone Icon"
                />
                <a href="tel:+1012 3456 789">+1012 3456 789</a>
              </li>
              <li>
                <img
                  src="images/icon-envelope-fill.svg"
                  width={100}
                  height={100}
                  alt="Email Icon"
                />
                <a href="mailto:demo@gmail.com">demo@gmail.com</a>
              </li>
              <li>
                <img
                  src="images/icon-map-marker.svg"
                  width={100}
                  height={100}
                  alt="Map Marker Icon"
                />
                <span>
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
                  States
                </span>
              </li>
            </ul>
            <ul className="social_list mt-5">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <img
                    src="images/social_facebook.svg"
                    width={100}
                    height={100}
                    alt="Facebook Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <img
                    src="images/social_twitter.svg"
                    width={100}
                    height={100}
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <img
                    src="images/social_linkedin.svg"
                    width={100}
                    height={100}
                    alt="Linkedin Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <img
                    src="images/social_instagram.svg"
                    width={100}
                    height={100}
                    alt="Instagram Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  aria-label="Pinterest"
                >
                  <img
                    src="images/social_pinterest.svg"
                    width={100}
                    height={100}
                    alt="Pinterest Icon"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="form_wrapper">
            <form action="" method="post">
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="form_blk">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="eg: John Wick"
                      className="input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_blk">
                    <label htmlFor="">Phone</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="eg: 813-523-8165"
                      className="input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_blk">
                    <label htmlFor="">Subject</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="eg: Lorem Ipsum Dollar"
                      className="input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form_blk">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="eg: sample@gmail.com"
                      className="input"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-12">
                  <div className="form_blk">
                    <label htmlFor="">Comments</label>
                    <textarea
                      name=""
                      id=""
                      rows={6}
                      placeholder="Type something here..."
                      className="input"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="btn_blk justify-content-end mt-5">
                <button type="submit" className="site_btn px">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact */}

</>

      <Footer />
    </>
  );
}
