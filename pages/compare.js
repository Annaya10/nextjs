import React from "react";
import LoginHeader from "../components/LoginHeader";
import Footer from "../components/Footer";

export default function Compare() {
  return (
    <>
      <LoginHeader />
      <>
      <section id="compare">
    <div className="contain">
      <h3 className="mb-4">Compare</h3>
      <div className="table_blk_wrap">
        <div className="table_blk">
          <table>
            <tbody>
              <tr>
                <td />
                <td>
                  <button type="button" className="x_btn" />
                </td>
                <td>
                  <button type="button" className="x_btn" />
                </td>
                <td>
                  <button type="button" className="x_btn" />
                </td>
                <td>
                  <button type="button" className="x_btn" />
                </td>
                <td>
                  <button type="button" className="x_btn" />
                </td>
              </tr>
              <tr>
                <td>Name</td>
                <td>
                  <div className="name">
                    <a href="product-detail">Basic Relax Fit Leggings</a>
                  </div>
                </td>
                <td>
                  <div className="name">
                    <a href="product-detail">Belted Trench Coat</a>
                  </div>
                </td>
                <td>
                  <div className="name">
                    <a href="product-detail">Brown Arizona Sweatshirt</a>
                  </div>
                </td>
                <td>
                  <div className="name">
                    <a href="product-detail">
                      High-Rise Comfort Slim-Fit Straight-Fit Jeans
                    </a>
                  </div>
                </td>
                <td>
                  <div className="name">
                    <a href="product-detail">
                      Basic Colored Sweatpants With Elastic Hems
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Photo</td>
                <td>
                  <div className="image">
                    <a href="product-detail">
                      <img
                        src="images/products/01.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="image">
                    <a href="product-detail">
                      <img
                        src="images/products/02.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="image">
                    <a href="product-detail">
                      <img
                        src="images/products/03.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="image">
                    <a href="product-detail">
                      <img
                        src="images/products/04.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="image">
                    <a href="product-detail">
                      <img
                        src="images/products/05.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>SKU</td>
                <td>BE45O8T</td>
                <td>HE923A</td>
                <td>HE920A</td>
                <td>YTR4JK74</td>
                <td>BE45VGRT</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>
                  <div className="rating" data-rating={5} />
                </td>
                <td>
                  <div className="rating" data-rating={5} />
                </td>
                <td>
                  <div className="rating" data-rating={4} />
                </td>
                <td>
                  <div className="rating" data-rating={5} />
                </td>
                <td>
                  <div className="rating" data-rating={5} />
                </td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  <div className="price">
                    <del>$29.90</del> $24.90
                  </div>
                </td>
                <td>
                  <div className="price">
                    <del>$120.00</del> $90.00
                  </div>
                </td>
                <td>
                  <div className="price">
                    <del>$28.60</del> $22.60
                  </div>
                </td>
                <td>
                  <div className="price">
                    <del>$55.90</del> $45.90
                  </div>
                </td>
                <td>
                  <div className="price">
                    <del>$25.90</del> $19.90
                  </div>
                </td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
                <td>
                  <div className="stock out">Out of Stock</div>
                </td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
              </tr>
              <tr>
                <td>Availability</td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
                <td>
                  <div className="stock out">Out of Stock</div>
                </td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
                <td>
                  <div className="stock">In Stock</div>
                </td>
              </tr>
              <tr>
                <td>Add to cart</td>
                <td>
                  <a href="shopping-cart" className="site_btn sm">
                    Add to Cart
                  </a>
                </td>
                <td>
                  <a href="shopping-cart" className="site_btn sm">
                    Add to Cart
                  </a>
                </td>
                <td>
                  <a href="shopping-cart" className="site_btn sm">
                    Add to Cart
                  </a>
                </td>
                <td>
                  <a href="shopping-cart" className="site_btn sm">
                    Add to Cart
                  </a>
                </td>
                <td>
                  <a href="shopping-cart" className="site_btn sm">
                    Add to Cart
                  </a>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquid ab praesentium mollitia commodi, iste molestias
                    illum? Quisquam, vel nihil laudantium inventore facilis,
                    aperiam atque aspernatur qui ipsa debitis, alias ea.
                  </p>
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident quasi sint illum fuga ullam inventore error
                    facere, eveniet consectetur ducimus sunt reprehenderit
                    tenetur tempora, quam voluptatem eos quos. Blanditiis,
                    accusantium?
                  </p>
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet ipsum non doloremque nesciunt velit aspernatur
                    excepturi maxime minus, tenetur nostrum aliquid id, saepe
                    repudiandae optio eligendi quas animi eius est.
                  </p>
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus dicta ipsa exercitationem perspiciatis laborum error
                    dolorum sunt possimus voluptas aliquid pariatur, suscipit
                    similique at obcaecati officiis molestias quos earum unde?
                  </p>
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Debitis tenetur blanditiis necessitatibus, assumenda
                    pariatur mollitia, quod officiis soluta, perspiciatis
                    architecto repellendus temporibus laudantium aliquid
                    explicabo nisi iure voluptatem recusandae eius!
                  </p>
                </td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>
                  <p>
                    Apple Red <br /> Bio Blue <br /> Sweet Orange <br /> Blue{" "}
                    <br /> Green <br /> Pink <br /> Red <br /> Black <br />{" "}
                    White
                  </p>
                </td>
                <td>
                  <p>Green</p>
                </td>
                <td />
                <td />
                <td>
                  <p>
                    Sweet Orange <br /> Blue <br /> Green <br /> Pink <br />{" "}
                    Black <br /> White
                  </p>
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>
                  <p>
                    XXS <br /> XS <br /> S <br /> M <br /> L <br /> XL <br />{" "}
                    XXL
                  </p>
                </td>
                <td />
                <td />
                <td>
                  <p>
                    S <br /> M <br /> L <br /> XL
                  </p>
                </td>
                <td>
                  <p>
                    XXS <br /> XS <br /> S <br /> M <br /> L <br /> XL <br />{" "}
                    XXL
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  {/* compare */}

</>

      <Footer />
    </>
  );
}
