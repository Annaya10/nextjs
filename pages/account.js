import React from "react";


export default function Account() {
  return (
  
      <>
      <section id="account">
    <div className="contain sm">
      <div className="pro_blk">
        <div className="ico fill round">
          <img src="/images/users/01.webp" alt="" />
        </div>
        <div className="txt">
          <h2>
            <span>Welcome,</span> Jennifer Kem!
          </h2>
          <p>Nice to see you again.</p>
        </div>
      </div>
      <div className="pt-5" />
      <form action="" method="POST">
        <div className="blk">
          <h4 className="mb-4">Personal information</h4>
          <div className="dp_blk">
            <div className="ico fill round">
              <img src="/images/users/01.webp" alt="" />
            </div>
            <div className="txt">
              <div className="btn_blk">
                <button type="button" className="change_photo_btn">
                  Change Photo
                </button>
                <input type="file" name="" id="" />
              </div>
              <div className="pt-4" />
              <div>Acceptable only jpg, png</div>
              <div>
                The maximum file size is 500 kb and the minimum size is 80 kb.
              </div>
            </div>
          </div>
          <div className="form_row row">
            <div className="col-lg-4 col-12">
              <h6>First Name</h6>
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="eg: John"
                  defaultValue="Jennifer"
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>Last Name</h6>
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="eg: Wick"
                  defaultValue="Kem"
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>Phone Number</h6>
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="eg: +92300 0000 000"
                  defaultValue='02077829920'
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>Email Address</h6>
              <div className="form_blk">
                <input
                  type="text"
                  id=""
                  name=""
                  className="input"
                  placeholder="eg: sample@gmail.com"
                  defaultValue="buyer@gmail.com"
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>Date of Birth</h6>
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="eg: 01-01-1998"
                  defaultValue="12-31-1969"
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>Gender</h6>
              <div className="form_blk">
                <select name="" id="" className="input">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <h4 className="mb-4">Address information</h4>
          <div className="form_row row">
            <div className="col-lg-4 col-12">
              <h6>Country</h6>
              <div className="form_blk">
                <select name="" id="" className="input">
                  <option value="">Select</option>
                  <option value={232}>United Kingdom</option>
                  <option value={232}>United Kingdom</option>
                  <option value={232}>United Kingdom</option>
                  <option value={232}>United Kingdom</option>
                  <option value={232}>United Kingdom</option>
                  <option value={232}>United Kingdom</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>State</h6>
              <div className="form_blk">
                <select name="" id="" className="input">
                  <option value="">Select</option>
                  <option value={2289}>Isle of Wight</option>
                  <option value={2290}>St Helens</option>
                  <option value={2291}>London Borough of Brent</option>
                  <option value={2292}>Walsall</option>
                  <option value={2293}>Trafford</option>
                  <option value={2294}>City of Southampton</option>
                  <option value={2295}>Sheffield</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>City</h6>
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="eg: California"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h6>Zip Code</h6>
              <div className="form_blk">
                <input
                  type="text"
                  id=""
                  name=""
                  className="input"
                  placeholder="eg: BL0 0WY"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <h6>Address</h6>
              <div className="form_blk">
                <input
                  type="text"
                  id=""
                  name=""
                  className="input"
                  placeholder="eg: 123 Main Street, California"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className="btn_blk justify-content-center mt-5">
            <button type="submit" className="site_btn px">
              Save
            </button>
          </div>
        </div>
      </form>
      <div className="pt-5" />
      <form action="" method="POST">
        <div className="blk">
          <h4 className="mb-4">Change Password</h4>
          <div className="form_row row">
            <div className="col-lg-4 col-12">
              <div className="form_blk">
                <input
                  type="password"
                  name=""
                  id=""
                  className="input"
                  placeholder="Current password"
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="form_blk">
                <input
                  type="password"
                  name=""
                  id=""
                  className="input"
                  placeholder="New password"
                />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="form_blk">
                <input
                  type="password"
                  name=""
                  id=""
                  className="input"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>
          <div className="btn_blk justify-content-center mt-5">
            <button type="submit" className="site_btn">
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/* account */}

</>


  );
}
