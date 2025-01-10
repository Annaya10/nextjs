import React from "react";


export default function CheckOut() {
  return (
    <>
      
      <section id="checkout">
    <div className="contain">
      <div className="row flex_row">
        <div className="col-xl-8">
          <h3>Checkout</h3>
          <p className="opacity-50">
            All fields required unless otherwise noted
          </p>
          <div className="payment_info_blk mt-4">
            <h5>Payment Method:</h5>
            <div className="credit_card_bar mb-4">
              <div className="lbl_btn align-items-center fw_600">
                Credit Card/Debit Card
              </div>
              <div className="cards_fig">
                <img src="/images/payment_visa.svg" alt="" />
                <img src="/images/payment_master.svg" alt="" />
                <img src="/images/payment_amex.svg" alt="" />
                <img src="/images/payment_discover.svg" alt="" />
              </div>
              <small className="ms-3">and more...</small>
            </div>
            <div id="add_new_credit">
              <div className="row form_row">
                <div className="col-sm-6">
                  <div className="form_blk">
                    <h6>Card Number</h6>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input"
                      placeholder="eg: 1234567899696"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form_blk">
                    <h6 className="require">Exp MM/ YY</h6>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input"
                      placeholder="eg: 12/2030"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form_blk">
                    <h6>Name on Card</h6>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input"
                      placeholder="eg: John Wick"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form_blk">
                    <h6 className="require">Security Code</h6>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input"
                      placeholder="eg: 345434"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="billing_address">
              <h5>Billing Address:</h5>
              <div className="pt-4">
                <div className="row form_row">
                  <div className="col-sm-6">
                    <div className="form_blk">
                      <h6>First Name</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: John"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_blk">
                      <h6>Last Name</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: Wick"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="form_blk">
                      <h6>Billing Address</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: 123 Main Street, California"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form_blk">
                      <h6 className="require">Zip Code</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: BL0 0WY"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form_blk">
                      <h6>City</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: California"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form_blk">
                      <h6 className="require">State</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: Sheffield"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form_blk">
                      <h6>Country</h6>
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
                </div>
              </div>
            </div>
            <hr />
            <div className="row form_row">
              <div className="col-sm-12">
                <div className="lbl_btn">
                  <input
                    type="checkbox"
                    name="same_shipping"
                    id="same_shipping"
                  />
                  <label htmlFor="same_shipping">Same as billing address</label>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="lbl_btn">
                  <input
                    type="checkbox"
                    name="differ_shipping"
                    id="differ_shipping"
                  />
                  <label htmlFor="differ_shipping">
                    Use a different shipping address
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="billing_address">
              <h5>Shipping Address:</h5>
              <div id="add_new_billing" className="pt-4">
                <div className="row form_row">
                  <div className="col-sm-6">
                    <div className="form_blk">
                      <h6>First Name</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: John"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_blk">
                      <h6>Last Name</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: Wick"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="form_blk">
                      <h6>Shipping Address</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: 123 Main Street, California"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form_blk">
                      <h6 className="require">Zip Code</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: BL0 0WY"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form_blk">
                      <h6>City</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: California"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form_blk">
                      <h6 className="require">State</h6>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input"
                        placeholder="eg: Sheffield"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form_blk">
                      <h6>Country</h6>
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
                </div>
              </div>
            </div>
            <hr />
            <h5>Contact Info:</h5>
            <p>
              Receive your order confirmation email and get updates on the
              status of your order.
            </p>
            <p>
              An order confirmation email will be sent to:{" "}
              <b> tracksuit980@gmail.com </b>
            </p>
            <div className="row form_row">
              <div className="col-sm-12">
                <div className="form_blk">
                  <div className="lbl_btn">
                    <input type="checkbox" name="spe_offers" id="spe_offers" />
                    <label htmlFor="spe_offers">
                      Email me promotions and special offers
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form_blk">
                  <h6>Phone Number</h6>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input"
                    placeholder="eg: +1-xxx-xxx-xxxx"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form_blk">
                  <div className="lbl_btn">
                    <input
                      type="checkbox"
                      name="order_status"
                      id="order_status"
                    />
                    <label htmlFor="order_status">
                      Send me order status updates to my mobile number
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form_blk">
                  <div className="lbl_btn">
                    <input type="checkbox" name="exclusive" id="exclusive" />
                    <label htmlFor="exclusive">
                      Get exclusive offers via SMS to your mobile number
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_blk mt-5">
              <button type="submit" className="site_btn w-100">
                Submit Order
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="cart_side_blk mb-4">
            <h4 className="mb-4">Seller Information</h4>
            <div className="seller_info">
              <div className="ico fill round">
                <img src="/images/users/01.webp" alt="" />
              </div>
              <div className="text_r">
                <div className="name">Aleena Gilbert</div>
                <div className="_rating">
                  <img
                    src="<?=base_url()?>images/fi-sr-star.png"
                    alt=""
                  />
                  <span>5.0</span>
                  <span className="dim_text">(23)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="top_heading side_head">
            <h3 className="mb-3">Order Summary</h3>
            <div className="btn_blk">
              <a
                href="javascript:void(0)"
                className="read_more_btn"
                id="discount_btn"
              >
                Discount or Gift Card
              </a>
            </div>
          </div>
          <div className="cart_side_blk mt-4">
            <div className="summary_cart_table">
              <table className="w-100">
                <tbody>
                  <tr>
                    <td>
                      <div className="ico_blk">
                        <div className="ico fill round">
                          <a href="product-detail">
                            <img
                              src="/images/products/01.jpg"
                              width={200}
                              height={200}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="product-detail">
                            Women's Hooded Loungewear Set - L / Khaki
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="price">$40.00</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table className="w-100">
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <div className="free_ship">
                      <img src="/images/icon-truck.svg" alt="" /> $2.03
                      away from &nbsp;<strong>Free Shipping!</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Subtotal <small>(items)</small>
                  </td>
                  <td>$47.97</td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Taxes</td>
                  <td>$4.59</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="info_blk">
                      <img src="/images/icon-info.svg" alt="" />
                      <span className="small">
                        Estimated delivery &amp; tax for 17857
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="fw_600">
                  <td>Discount</td>
                  <td>-$1.24</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <hr />
                  </td>
                </tr>
                <tr className="fw_700">
                  <td>Total</td>
                  <td>$58.32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* checkout */}

</>

    
  );
}
