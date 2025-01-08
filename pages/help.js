import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Help() {
  return (
    <>
      <Header />
      <>
      <section id="help">
    <div className="contain">
      <div className="top_head text-center">
        <h2 className="mb-4">How we can help you</h2>
        <form action="" method="get">
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder="Ask a question"
          />
          <button type="submit">
            <img
              src="images/icon-search.svg"
              width={60}
              height={60}
              alt="Search Icon"
            />
          </button>
        </form>
      </div>
      <div className="wrapper">
        <div className="left_side">
          <h4 className="mb-5">Categories</h4>
          <ul className="list">
            <li>
              <button type="button" className="active">
                Account Management
              </button>
            </li>
            <li>
              <button type="button">Getting Started</button>
            </li>
            <li>
              <button type="button">Payments and Billing</button>
            </li>
            <li>
              <button type="button">Understanding Your Bill</button>
            </li>
            <li>
              <button type="button">Troubleshooting</button>
            </li>
            <li>
              <button type="button">Contact Support</button>
            </li>
            <li>
              <button type="button">Selling</button>
            </li>
            <li>
              <button type="button">Buying</button>
            </li>
            <li>
              <button type="button">Troubleshooting</button>
            </li>
          </ul>
        </div>
        <div className="right_side">
          <h3 className="mb-5">Account Management</h3>
          <div className="in_blk">
            <a href="help-detail.php">
              <div className="title">How to Create an Account</div>
              <p>A step-by-step guide to creating an account on our platform</p>
            </a>
          </div>
          <div className="in_blk">
            <a href="help-detail.php">
              <div className="title">Changing Password</div>
              <p>Instructions on how to update your password for security</p>
            </a>
          </div>
          <div className="in_blk">
            <a href="help-detail.php">
              <div className="title">Understanding Your Bill</div>
              <p>Instructions on how to update your password for security</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* help */}

</>

      <Footer />
    </>
  );
}
