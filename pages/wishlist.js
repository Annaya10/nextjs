import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function wishlist() {
  return (
    <>
      <Header />
      <>
      <section id="wishlist">
    <div className="contain sm">
      <h3 className="mb-4">Wishlist</h3>
      <div className="wishlist_table">
        <table>
          <thead>
            <tr>
              <th />
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th />
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
                      <img
                        src="images/products/01.jpg"
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
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="stock">In Stock</div>
              </td>
              <td>
                <a href="shopping-cart" className="site_btn sm">
                  Add to Cart
                </a>
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
                      <img
                        src="images/products/02.jpg"
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
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="stock out">Out of Stock</div>
              </td>
              <td>
                <a href="shopping-cart" className="site_btn sm">
                  Add to Cart
                </a>
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
                      <img
                        src="images/products/03.jpg"
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
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="stock">In Stock</div>
              </td>
              <td>
                <a href="shopping-cart" className="site_btn sm">
                  Add to Cart
                </a>
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
                      <img
                        src="images/products/04.jpg"
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
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="stock">In Stock</div>
              </td>
              <td>
                <a href="shopping-cart" className="site_btn sm">
                  Add to Cart
                </a>
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
                      <img
                        src="images/products/05.jpg"
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
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="stock">In Stock</div>
              </td>
              <td>
                <a href="shopping-cart" className="site_btn sm">
                  Add to Cart
                </a>
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
                      <img
                        src="images/products/06.jpg"
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
                <div className="price">
                  <del>$45.00</del> $40.00
                </div>
              </td>
              <td>
                <div className="stock">In Stock</div>
              </td>
              <td>
                <a href="shopping-cart" className="site_btn sm">
                  Add to Cart
                </a>
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
  {/* wishlist */}

</>

      <Footer />
    </>
  );
}
