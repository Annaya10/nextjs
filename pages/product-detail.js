import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProductDetail() {
  const settings = {
    dots: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div>
          <Image width={100}  height={100} 
            src={`/images/fa752500afa252e18ff36e530522ee81.jpg_750x750 2.jpg`} // This should be dynamic or based on the current image
            alt={`Slide ${i + 1}`}
            style={{ width: "50px", height: "50px" }} // Adjust size as needed
          />
        </div>
      );
    },
  };
  return (
    <>
     
      <section id="details">
    <div className="contain">
      <form action="shopping-cart" method="POST">
        <div className="row flex_row">
          <div className="col1">
            <div className="in_col">
              <div >

              <Slider {...settings}>
                <div className="item">
                  <figure
                    data-href="images/fa752500afa252e18ff36e530522ee81.jpg_750x750 2.jpg"
                    className="image"
                    data-fancybox="detail"
                  >
                    <Image width={100}  height={100} 
                      src="/images/fa752500afa252e18ff36e530522ee81.jpg_750x750 2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="item">
                  <figure
                    data-href="images/blog_01.jpg"
                    className="image"
                    data-fancybox="detail"
                  >
                    <Image width={100}  height={100}  src="/images/blog_01.jpg" alt="" />
                  </figure>
                </div>
                <div className="item">
                  <figure
                    data-href="images/blog_02.jpg"
                    className="image"
                    data-fancybox="detail"
                  >
                    <Image width={100}  height={100}  src="/images/blog_02.jpg" alt="" />
                  </figure>
                </div>
                <div className="item">
                  <figure
                    data-href="images/blog_03.jpg"
                    className="image"
                    data-fancybox="detail"
                  >
                    <Image width={100}  height={100}  src="/images/blog_03.jpg" alt="" />
                  </figure>
                </div>
                <div className="item">
                  <figure
                    data-href="images/folio_01.jpg"
                    className="image"
                    data-fancybox="detail"
                  >
                    <Image width={100}  height={100}  src="/images/folio_01.jpg" alt="" />
                  </figure>
                </div>


                </Slider>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="content">
              <h3 className="title">Mega Marni Bowling Shirt in Lily White</h3>
              <div className="brand fw_600">Artikelnummer: 7263</div>
              <div className="stock_status green_text">In stock</div>
              <div className="price">
                $53.99<del>$98.99</del>
              </div>
              <h6>Color</h6>
              <div className="color_ico ico">
                <Image width={100}  height={100}  src="/images/color/black.jpg" alt="" />
              </div>
              <h6>Quantity</h6>
              <div className="qty_btn mb-4">
                <a className="minus" />
                <input
                  type="text"
                  name="qty"
                  defaultValue={1}
                  className="qty"
                />
                <a className="plus" />
              </div>
            </div>
            <div className="btn_blk">
              <a href="checkout" className="site_btn blank stroke w-100">
                Buy Now
              </a>
              <a href="wishlist" className="site_btn blank stroke w-100">
                <Image width={100}  height={100}  src="/images/icon-heart.svg" alt="" />
                Add to wishlist
              </a>
              <button
                type="button"
                className="site_btn w-100 pop_btn"
                data-popup="offer"
              >
                Make an offer
              </button>
              <button type="button" className="site_btn w-100">
                Message seller
              </button>
            </div>
          </div>
        </div>
        <div className="textual">
          <div className="nav tab_list" role="tablist">
            <button
              type="button"
              className="active"
              data-bs-toggle="pill"
              data-bs-target="#tab_Description"
              role="tab"
            >
              Description
            </button>
            <button
              type="button"
              data-bs-toggle="pill"
              data-bs-target="#tab_Return"
              role="tab"
            >
              Return Policy
            </button>
          </div>
          <div className="tab-content">
            <div
              id="tab_Description"
              className="tab-pane fade show active"
              role="tabpanel"
            >
              <h4>Description</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div id="tab_Return" className="tab-pane fade" role="tabpanel">
              <h4>Return Policy</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab
                odit, quasi obcaecati unde eveniet dolorum quod ipsum veniam
                tempora numquam facilis incidunt dolor fugit impedit illum
                reprehenderit, reiciendis cumque.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/* details */}
  <section id="items" className="pt-0">
    <div className="contain">
      <div className="content">
        <div className="text">
          <h3>Similar Products</h3>
          <p>
            Explore our curated collection of high-performance tracksuits. Place
            your bid now to own these stylish and comfortable athletic wears.
          </p>
        </div>
        <a href="?" className="read_more_btn">
          See all
        </a>
      </div>
      <div className="row card_row">
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <Image width={100}  height={100}  src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <Image width={100}  height={100}  src="/images/products/01.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="btm">
                <div className="ico_blk">
                  <div className="ico fill round">
                    <Image
                      src="/images/users/01.webp"
                      width={150}
                      height={150}
                      alt="User Photo"
                    />
                  </div>
                  <div className="name">Jennifer Kem</div>
                </div>
                <div className="price">$200</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <Image width={100}  height={100}  src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <Image width={100}  height={100}  src="/images/products/02.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="btm">
                <div className="ico_blk">
                  <div className="ico fill round">
                    <Image  
                      src="/images/users/02.webp"
                      width={150}
                      height={150}
                      alt="User Photo"
                    />
                  </div>
                  <div className="name">Mike Tyson</div>
                </div>
                <div className="price">$200</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <Image width={100}  height={100}  src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <Image width={100}  height={100}  src="/images/products/03.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="btm">
                <div className="ico_blk">
                  <div className="ico fill round">
                    <Image 
                      src="/images/users/03.webp"
                      width={150}
                      height={150}
                      alt="User Photo"
                    />
                  </div>
                  <div className="name">Monica Kajvral</div>
                </div>
                <div className="price">$200</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <Image width={100}  height={100}  src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <Image width={100}  height={100}  src="/images/products/04.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="btm">
                <div className="ico_blk">
                  <div className="ico fill round">
                    <Image 
                      src="/images/users/04.webp"
                      width={150}
                      height={150}
                      alt="User Photo"
                    />
                  </div>
                  <div className="name">Samira Jones</div>
                </div>
                <div className="price">$200</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <Image width={100}  height={100}  src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <Image width={100}  height={100}  src="/images/products/05.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="btm">
                <div className="ico_blk">
                  <div className="ico fill round">
                    <Image 
                      src="/images/users/05.webp"
                      width={150}
                      height={150}
                      alt="User Photo"
                    />
                  </div>
                  <div className="name">John Wick</div>
                </div>
                <div className="price">$200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* items */}

</>

   
  );
}
