import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <>
      <Header />
      <>
      <section id="logon">
  <div className="contain">
    <div className="log_blk">
      <form action="account.php" method="post">
        <div className="text">
          <h3>Create an account</h3>
          <p>Enter your details below</p>
        </div>
        <div className="row form_row">
          <div className="col-sm-12">
            <div className="form_blk">
              <input
                type="text"
                name=""
                id=""
                className="input"
                placeholder="Full Name"
              />
            </div>
          </div>
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
                type="text"
                name=""
                id=""
                className="input"
                placeholder="Phone Number"
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
            <div className="form_blk">
              <div className="lbl_btn">
                <input type="checkbox" name="confirm" id="confirm" />
                <label htmlFor="confirm">
                  By creating an account you confirm that you agree to our
                  website terms of use and our privacy notice.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_blk mt-5">
          <button type="submit" className="site_btn w-100">
            Create an Account
          </button>
        </div>
        <div className="have_account">
          Already have an account? <a href="signin.php">Sign in</a>
        </div>
      </form>
    </div>
  </div>
</section>

</>

      <Footer />
    </>
  );
}
