import React from "react";
import Image from "next/image";


export default function Shopping() {
  return (
    <>
     
      <section id="cart">
    <div className="contain sm">
      <h3 className="mb-4">Shopping cart</h3>
      <div className="cart_table">
        <table>
          <thead>
            <tr>
              <th />
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" className="x_btn" />
              </td>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <Image 
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
                <div className="qty_btn">
                  <a className="minus" />
                  <input
                    type="text"
                    name="qty"
                    defaultValue={1}
                    className="qty"
                  />
                  <a className="plus" />
                </div>
              </td>
              <td>
                <div className="price">$40.00</div>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" className="x_btn" />
              </td>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <Image 
                        src="/images/products/02.jpg"
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
                <div className="qty_btn">
                  <a className="minus" />
                  <input
                    type="text"
                    name="qty"
                    defaultValue={1}
                    className="qty"
                  />
                  <a className="plus" />
                </div>
              </td>
              <td>
                <div className="price">$40.00</div>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" className="x_btn" />
              </td>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <Image 
                        src="/images/products/03.jpg"
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
                <div className="qty_btn">
                  <a className="minus" />
                  <input
                    type="text"
                    name="qty"
                    defaultValue={1}
                    className="qty"
                  />
                  <a className="plus" />
                </div>
              </td>
              <td>
                <div className="price">$40.00</div>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" className="x_btn" />
              </td>
              <td>
                <div className="ico_blk">
                  <div className="ico fill round">
                    <a href="product-detail">
                      <Image 
                        src="/images/products/04.jpg"
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
                <div className="qty_btn">
                  <a className="minus" />
                  <input
                    type="text"
                    name="qty"
                    defaultValue={1}
                    className="qty"
                  />
                  <a className="plus" />
                </div>
              </td>
              <td>
                <div className="price">$40.00</div>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="text-lg-end text-center">
                Subtotal:
              </td>
              <td>
                <div className="price">$160.00</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn_blk justify-content-end">
        <a href="checkout" className="site_btn px w_100">
          Checkout
        </a>
      </div>
    </div>
  </section>
  {/* cart */}

</>

   
  );
}
