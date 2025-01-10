import React from "react";


export default function OrderDetail() {
  return (
   
      <>
      <section id="track">
    <div className="contain sm">
      <h3 className="mb-4">Track Order</h3>
      <div className="row form_row">
        <div className="col-sm-12 d-flex">
          <div className="inner w-100">
            <ul className="track_list text-center">
              <li className="active">
                <div className="txt">
                  <strong className="fw_600">Ordered</strong>
                  <span>Tue, Jul 10</span>
                </div>
              </li>
              <li>
                <div className="txt">
                  <strong className="fw_600">Shipped</strong>
                  <span>Thu, Jul 12</span>
                </div>
              </li>
              <li>
                <div className="txt">
                  <strong className="fw_600">Expected Delivery</strong>
                  <span>Tue, Jul 17</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 d-flex">
          <div className="inner w-100">
            <h5 className="mb-4">Product Information</h5>
            <div className="inner_flex order_detail_detail">
              <div className="image">
                <img src="/images/products/03.jpg" alt="Product Photo" />
              </div>
              <div className="title">
                <p>Women's Hooded Loungewear Set - L / Khaki</p>
              </div>
            </div>
            <table className="ship_info_tbl mt-4">
              <tbody>
                <tr>
                  <td>
                    <strong className="fw_600">Price</strong>
                  </td>
                  <td>$560</td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Brand</strong>
                  </td>
                  <td>Iron Gear</td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Color</strong>
                  </td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Size</strong>
                  </td>
                  <td>XL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6 d-flex">
          <div className="inner w-100">
            <h5>Shipment Information</h5>
            <table className="ship_info_tbl">
              <tbody>
                <tr>
                  <td>
                    <strong className="fw_600">Delivery Method</strong>
                  </td>
                  <td>FedEx Home Delivery</td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Carrier</strong>
                  </td>
                  <td>FedEx 800-GO-FEDEX (463.3339)</td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Tracking #</strong>
                  </td>
                  <td>
                    <strong className="fw_600">090210916421353</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Shipping to</strong>
                  </td>
                  <td>
                    Ben Mishkin <br /> 7004 E Ohio Drive <br /> Denver, CO 80224
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong className="fw_600">Order ID</strong>
                  </td>
                  <td>9166799832560</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-12 d-flex">
          <div className="inner w-100">
            <h5>Order Summary</h5>
            <table className="w-100">
              <tbody>
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
                  <td colSpan={2}>Delivery &amp; tax for 17857</td>
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
        <div className="col-sm-12 d-flex">
          <div className="inner w-100">
            <h5 className="mb-4">Tracking Information</h5>
            <textarea
              name=""
              id=""
              rows={10}
              className="input text_area"
              defaultValue={""}
            />
            <div className="btn_blk mt-4">
              <button className="site_btn">Submit</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 d-flex">
          <div className="inner w-100">
            <h5 className="mb-4">Review</h5>
            <div className="review_blk">
              <div className="review_flex">
                <div className="image">
                  <img src="/images/users/03.webp" alt="User Photo" />
                </div>
                <div className="title">
                  <p>Aleena Gilbert</p>
                  <div className="rateYo" />
                </div>
              </div>
              <div className="review_pera">
                <p>
                  "I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I
                  am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 d-flex">
          <div className="inner w-100 buyer_tracking_blk">
            <h5 className="mb-4">Tracking Information</h5>
            <div className="blk_tracking_inner">
              <p>
                <strong>FedEx 800-GO-FEDEX (463.3339)</strong>
              </p>
            </div>
            <div className="btn_blk">
              <a
                href="javascript:void(0)"
                className="site_btn pop_btn"
                data-popup="confirm"
              >
                I've received the order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* track */}
  <div className="popup offer_popup confirm_popup" data-popup="confirm">
    <div className="table_dv">
      <div className="table_cell">
        <div className="_inner">
          <div className="x_btn" />
          <div className="text-center">
            <h4>Have you successfully received your order?</h4>
            <div className="btn_blk">
              <a
                href="javascript:void(0)"
                className="site_btn pop_btn confirm_btn_popup"
                data-popup="review"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="popup offer_popup confirm_popup" data-popup="review">
    <div className="table_dv">
      <div className="table_cell">
        <div className="_inner">
          <div className="x_btn" />
          <div className="leave_review">
            <h4>Leave Review</h4>
            <form action="">
              <div className="rating_add_blk">
                <h5>Your Rating</h5>
                <div className="_rateYo" />
              </div>
              <div className="rating_add_blk">
                <h5>Your Review</h5>
                <textarea
                  name=""
                  id=""
                  rows={10}
                  className="input"
                  defaultValue={""}
                />
              </div>
            </form>
            <div className="btn_blk">
              <button className="site_btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>

     
  );
}
