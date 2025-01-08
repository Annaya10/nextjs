import React from "react";
import LoginHeader from "../components/LoginHeader";
import Footer from "../components/Footer";

export default function Order() {
  return (
    <>
      <LoginHeader />
      <>
      <section id="orders">
    <div className="contain sm">
      <h3 className="mb-4">Orders</h3>
      <form action="" method="POST" className="mb-5 pb-3">
        <div className="form_row row">
          <div className="col-md-5 col-sm-5">
            <div className="form_blk input">
              <input
                type="text"
                name=""
                id=""
                className="input"
                placeholder="Search by Order ID or Product"
              />
              <button type="submit" className="ico_btn">
                <img src="images/icon-search.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="form_blk dropdown">
              <button
                type="button"
                className="dropdown-toggle select chevron input"
                data-bs-toggle="dropdown"
              >
                Order Status
              </button>
              <ul className="dropdown-menu dropdown-menu-end w-100">
                <li>
                  <button type="button">All</button>
                </li>
                <li>
                  <button type="button">Processing</button>
                </li>
                <li>
                  <button type="button">Cancelled</button>
                </li>
                <li>
                  <button type="button">Pending Payment</button>
                </li>
                <li>
                  <button type="button">Ready To Ship</button>
                </li>
                <li>
                  <button type="button">Delivered</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="form_blk dropdown">
              <button
                type="button"
                className="dropdown-toggle select chevron input"
                data-bs-toggle="dropdown"
              >
                Date
              </button>
              <ul className="dropdown-menu dropdown-menu-end w-100">
                <li>
                  <button type="button">All Dates</button>
                </li>
                <li>
                  <button type="button">Last 30 Days</button>
                </li>
                <li>
                  <button type="button">Last 90 Days</button>
                </li>
                <li>
                  <button type="button">Current Year</button>
                </li>
                <li>
                  <button type="button">Custom Date Range</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div className="orders_table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <img
                        src="images/products/01.jpg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="txt">
                    <div className="name">
                      <a href="product-detail">
                        Women's Hooded Loungewear Set - L / Khaki
                      </a>
                    </div>
                    <div className="btn_blk mt-2">
                      <a
                        href="order-detail"
                        className="read_more_btn small"
                      >
                        View This Product
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="date">March 20, 2019 - 5:20 pm</div>
              </td>
              <td>
                <span className="badge green">Complete</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <img
                        src="images/products/02.jpg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="txt">
                    <div className="name">
                      <a href="product-detail">
                        Women's Hooded Loungewear Set - L / Khaki
                      </a>
                    </div>
                    <div className="btn_blk mt-2">
                      <a
                        href="order-detail"
                        className="read_more_btn small"
                      >
                        View This Product
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="date">March 20, 2019 - 5:20 pm</div>
              </td>
              <td>
                <span className="badge red">Cancelled</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <img
                        src="images/products/03.jpg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="txt">
                    <div className="name">
                      <a href="product-detail">
                        Women's Hooded Loungewear Set - L / Khaki
                      </a>
                    </div>
                    <div className="btn_blk mt-2">
                      <a
                        href="order-detail"
                        className="read_more_btn small"
                      >
                        View This Product
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="date">March 20, 2019 - 5:20 pm</div>
              </td>
              <td>
                <span className="badge green">Complete</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <img
                        src="images/products/04.jpg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="txt">
                    <div className="name">
                      <a href="product-detail">
                        Women's Hooded Loungewear Set - L / Khaki
                      </a>
                    </div>
                    <div className="btn_blk mt-2">
                      <a
                        href="order-detail"
                        className="read_more_btn small"
                      >
                        View This Product
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="date">March 20, 2019 - 5:20 pm</div>
              </td>
              <td>
                <span className="badge green">Complete</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <img
                        src="images/products/05.jpg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="txt">
                    <div className="name">
                      <a href="product-detail">
                        Women's Hooded Loungewear Set - L / Khaki
                      </a>
                    </div>
                    <div className="btn_blk mt-2">
                      <a
                        href="order-detail"
                        className="read_more_btn small"
                      >
                        View This Product
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="date">March 20, 2019 - 5:20 pm</div>
              </td>
              <td>
                <span className="badge green">Complete</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <img
                        src="images/products/06.jpg"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="txt">
                    <div className="name">
                      <a href="product-detail">
                        Women's Hooded Loungewear Set - L / Khaki
                      </a>
                    </div>
                    <div className="btn_blk mt-2">
                      <a
                        href="order-detail"
                        className="read_more_btn small"
                      >
                        View This Product
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="date">March 20, 2019 - 5:20 pm</div>
              </td>
              <td>
                <span className="badge green">Complete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <ul>
          <li>
            <button type="button" className="prev" />
          </li>
          <li className="active">
            <a href="?">1</a>
          </li>
          <li>
            <a href="?">2</a>
          </li>
          <li>
            <a href="?">3</a>
          </li>
          <li>
            <a href="?">...</a>
          </li>
          <li>
            <a href="?">50</a>
          </li>
          <li>
            <button type="button" className="next" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* orders */}

</>

      <Footer />
    </>
  );
}
