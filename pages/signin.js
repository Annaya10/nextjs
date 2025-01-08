// pages/index.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <>
      <Header />
      <>
      <section id="logon">
    <div className="contain">
      <div className="log_blk">
        <form action="account.php" method="post">
          <div className="text">
            <h3>Sign in to your account</h3>
            <p>Enter your login details below</p>
          </div>
          <div className="row form_row">
            <div className="col-sm-12">
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form_blk">
                <input
                  type="password"
                  name=""
                  id=""
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form_blk d-flex justify-content-between flex-wrap">
                <div className="lbl_btn">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="forgot.php" className="forgot">
                  Forgot your password ?
                </a>
              </div>
            </div>
          </div>
          <div className="btn_blk mt-5">
            <button type="submit" className="site_btn w-100">
              Sign in
            </button>
          </div>
          <div className="have_account">
            Don't have an account? <a href="signup.php">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* logon */}

</>

      <Footer />
    </>
  );
}
