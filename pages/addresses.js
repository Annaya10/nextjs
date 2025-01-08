import React from "react";
import LoginHeader from "../components/LoginHeader";
import Footer from "../components/Footer";

export default function Addresses() {
  return (
    <>
      <LoginHeader />
      <>
      <section id="address">
    <div className="contain sm">
      <h3 className="mb-4">Addresses</h3>
      <form action="" method="POST">
        <div className="row flex_row">
          <div className="col-lg-6 d-flex">
            <div className="accord_blk w-100">
              <h6 className="title font_1">Ben Mishkin</h6>
              <div className="txt">
                <p>7004 E Ohio Dr Denver, Co 80224-1535</p>
                <div className="btn_blk">
                  <span className="label green">Default shipping</span>
                  <span className="label green">Last used address</span>
                </div>
              </div>
              <div className="data">
                <p>
                  Delivery Instructions: Minima blanditiis provident et saepe
                  maxime et saepe maxime
                </p>
                <hr />
                <a href="edit-address" className="sm_btn">
                  <img src="images/icon-edit.svg" alt="" />
                  Edit
                </a>
                <hr />
                <button
                  type="button"
                  className="sm_btn pop_btn"
                  data-popup="remove"
                >
                  <img src="images/icon-trash.svg" alt="" />
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="accord_blk w-100">
              <h6 className="title font_1">Joe Blow</h6>
              <div className="txt">
                <p>6179 S Fulton St Englewood, CO 80111-5426</p>
                <div className="btn_blk">
                  <button type="button" className="label red">
                    <img src="images/icon-user-circle.svg" alt="" /> Set
                    as Default Shipping{" "}
                  </button>
                </div>
              </div>
              <div className="data">
                <p>
                  Delivery Instructions: Minima blanditiis provident et saepe
                  maxime et saepe maxime
                </p>
                <hr />
                <a href="edit-address" className="sm_btn">
                  <img src="images/icon-edit.svg" alt="" />
                  Edit
                </a>
                <hr />
                <button
                  type="button"
                  className="sm_btn pop_btn"
                  data-popup="remove"
                >
                  <img src="images/icon-trash.svg" alt="" />
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="accord_blk w-100">
              <h6 className="title font_1">Brent Phillips</h6>
              <div className="txt">
                <p>6179 S Fulton St Englewood, CO 80111-5426</p>
                <div className="btn_blk">
                  <button type="button" className="label red">
                    <img src="images/icon-user-circle.svg" alt="" /> Set
                    as Default Shipping{" "}
                  </button>
                </div>
              </div>
              <div className="data">
                <p>
                  Delivery Instructions: Minima blanditiis provident et saepe
                  maxime et saepe maxime
                </p>
                <hr />
                <a href="edit-address" className="sm_btn">
                  <img src="images/icon-edit.svg" alt="" />
                  Edit
                </a>
                <hr />
                <button
                  type="button"
                  className="sm_btn pop_btn"
                  data-popup="remove"
                >
                  <img src="images/icon-trash.svg" alt="" />
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="accord_blk w-100">
              <h6 className="title font_1">John Wick</h6>
              <div className="txt">
                <p>6179 S Fulton St Englewood, CO 80111-5426</p>
                <div className="btn_blk">
                  <button type="button" className="label red">
                    <img src="images/icon-user-circle.svg" alt="" /> Set
                    as Default Shipping{" "}
                  </button>
                </div>
              </div>
              <div className="data">
                <p>
                  Delivery Instructions: Minima blanditiis provident et saepe
                  maxime et saepe maxime
                </p>
                <hr />
                <a href="edit-address" className="sm_btn">
                  <img src="images/icon-edit.svg" alt="" />
                  Edit
                </a>
                <hr />
                <button
                  type="button"
                  className="sm_btn pop_btn"
                  data-popup="remove"
                >
                  <img src="images/icon-trash.svg" alt="" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/* address */}

</>

      <Footer />
    </>
  );
}
