// pages/index.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <>
  <section
    id="banner"
    style={{ backgroundImage: 'url("/images/banner_background.jpg")' }}
  >
    <div className="contain">
      <div className="flex_blk">
        <div className="content text-center">
          <h1>Elevate Your Tracksuit Company with Exclusive Bidding!</h1>
          <p>Discover, Bid, and Win Premium Tracksuits at Unbeatable Prices.</p>
          <div className="btn_blk justify-content-center">
            <a href="catalog" className="site_btn simple px">
              Shop New
            </a>
            <a href="" className="site_btn simple blank stroke px">
              Buy/Sell Pre-owned
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner */}
  {/* <section id="points">
		<div class="contain">
			<div class="wrapper">
				<div class="column">
					<div class="inner">
						<div class="icon"><img src="/images/package_vector.png" alt="Package"></div>
						<div class="text">
							<div class="h5">Millions of unique items</div>
							<p>Enter your bid amount and confirm your bid. Keep an eye on the bidding activity to stay informed about competing offers.</p>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="inner">
						<div class="icon"><img src="/images/curation_vector.png" alt="Curation"></div>
						<div class="text">
							<div class="h5">Curated by experts</div>
							<p>Enter your bid amount and confirm your bid. Keep an eye on the bidding activity to stay informed about competing offers.</p>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="inner">
						<div class="icon"><img src="/images/auction_vector.png" alt="Auction"></div>
						<div class="text">
							<div class="h5">Bid with ease</div>
							<p>Enter your bid amount and confirm your bid. Keep an eye on the bidding activity to stay informed about competing offers.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> */}
  {/* points */}
  <section id="feature">
    <div className="contain">
      <div className="content">
        <div className="text">
          <h3>Featured Items</h3>
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
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/01.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/02.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/03.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/04.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/05.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/06.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/07.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/08.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/09.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/10.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/11.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/12.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/01.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/02.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product_item">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/03.jpg" alt="Product Photo" />
              </a>
            </div>
            <div className="text">
              <div className="title">
                <a href="product-detail">
                  Women's Hooded Loungewear Set - L / Khaki
                </a>
              </div>
              <div className="start_price">
                <small>Starting</small> $200
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* feature */}
  <section id="brands" className="pt-0">
    <div className="contain">
      <div className="content">
        <h3>Shop by brand</h3>
        <p>
          Enter your bid amount and confirm your bid. Keep an eye on the bidding
          activity to stay informed about competing offers.
        </p>
      </div>
      <div id="slick-brands" className="slick-carousel slick-slider">
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_01.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_02.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_03.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_04.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_05.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_06.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_07.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_08.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_03.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_04.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <img src="/images/brand_05.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* brands */}
  <section id="works">
    <div className="contain">
      <div className="content">
        <h3>How It Works</h3>
        <p>
          Enter your bid amount and confirm your bid. Keep an eye on the bidding
          activity to stay informed about competing offers.
        </p>
      </div>
      <div className="wrapper">
        <div className="column">
          <div className="inner">
            <div className="icon">
              <img src="/images/browse_vector.png" alt="Browse" />
            </div>
            <div className="text">
              <div className="h5">Browse Item</div>
              <p>
                Explore our diverse collection of premium tracksuits. Simply
                navigate to the "Browse Auctions" section to discover the latest
                styles, colors, and limited editions.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="inner">
            <div className="icon">
              <img src="/images/bid_vector.png" alt="Bid" />
            </div>
            <div className="text">
              <div className="h5">Choose Your Tracksuit</div>
              <p>
                Found the tracksuit that suits your style? Great choice! Click
                the "Bid Now" button on your desired item's page. You can set
                your bidding limit to ensure you stay within your budget.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="inner">
            <div className="icon">
              <img src="/images/winner_vector.png" alt="Winner" />
            </div>
            <div className="text">
              <div className="h5">Winning and Payment</div>
              <p>
                Congratulations! If you have the highest bid when the auction
                closes, you're the winner. Proceed to the secure checkout to
                complete your purchase using our trusted payment options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* works */}
  <section id="items">
    <div className="contain">
      <div className="content">
        <div className="text">
          <h3>Users Items</h3>
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/01.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/01.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/02.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/02.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/03.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/03.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/04.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/04.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/05.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/05.webp"
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
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/06.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/06.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/07.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/01.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/08.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/02.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/09.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/03.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/10.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/04.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/11.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/05.webp"
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
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/12.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/06.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/01.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/01.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/02.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/02.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/03.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/03.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/04.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/04.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/05.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/05.webp"
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
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/06.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/06.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/07.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/01.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/08.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/02.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/09.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/03.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/10.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/04.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/11.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/05.webp"
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
        <div className="col">
          <div className="product_item mini">
            <button type="button" className="like_btn">
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/12.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/06.webp"
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
              <img src="/images/icon-heart.svg" alt="Like Button" />
            </button>
            <div className="image">
              <a href="product-detail">
                <img src="/images/products/01.jpg" alt="Product Photo" />
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
                    <img
                      src="images/users/01.webp"
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
      </div>
    </div>
  </section>
  {/* items */}
  {/* <section id="trust" class="pt-0">
		<div class="contain">
			<div class="wrapper">
				<div class="content">
					<h3>Trust and Security</h3>
					<p>We prioritize the security and trust of our users. Your peace of mind is essential to us, and we want to ensure a safe and enjoyable bidding experience. Here's how we guarantee your trust and security:</p>
					<ul class="list">
						<li>
							<img src="/images/check_circle.svg" width="60" height="60" alt="Check Circle">
							<div class="inr">
								<h5>Secure Transactions</h5>
								<p>Your transactions are encrypted and secure, ensuring the confidentiality and integrity of your financial information.</p>
							</div>
						</li>
						<li>
							<img src="/images/check_circle.svg" width="60" height="60" alt="Check Circle">
							<div class="inr">
								<h5>Trusted Payment Options</h5>
								<p>Choose from a variety of trusted and secure payment options, including major credit cards and PayPal.</p>
							</div>
						</li>
						<li>
							<img src="/images/check_circle.svg" width="60" height="60" alt="Check Circle">
							<div class="inr">
								<h5>Data Protection</h5>
								<p>We are committed to safeguarding your data. Our robust data protection measures ensure the privacy and confidentiality of your personal information.</p>
							</div>
						</li>
					</ul>
					<div class="btn_blk mt-5">
						<a href="?" class="site_btn">Start Bidding Now!</a>
						<a href="?" class="site_btn simple stroke px">Read More</a>
					</div>
				</div>
				<div class="image">
					<img src="/images/secure_transaction.png" width="800" height="800" alt="Secure Transaction">
				</div>
			</div>
		</div>
	</section> */}
  {/* trust */}
  <section id="posts">
    <div className="contain">
      <div className="content">
        <div className="text">
          <h3 className="mb-0">Featured blogs</h3>
        </div>
        <a href="?" className="read_more_btn">
          See all
        </a>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="blog_blk">
            <div className="tag">Nike</div>
            <div className="image">
              <a href="blog-detail">
                <img
                  src="/images/blog_01.jpg"
                  width={600}
                  height={500}
                  alt="Blog Post"
                />
              </a>
            </div>
            <div className="text">
              <h4>
                <a href="blog-detail">
                  Congue magna tempor and ipsum Martex sapien.....
                </a>
              </h4>
              <div className="time">1 Month Ago </div>
              <p>
                lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                eleifend sed ex. Donec quis magna sed felis elementum blandit
                nec quis sem. Maecen.
              </p>
              <a href="blog-detail" className="view_post">
                View Post
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_blk">
            <div className="tag">Adidas</div>
            <div className="image">
              <a href="blog-detail">
                <img
                  src="/images/blog_02.jpg"
                  width={600}
                  height={500}
                  alt="Blog Post"
                />
              </a>
            </div>
            <div className="text">
              <h4>
                <a href="blog-detail">
                  Congue magna tempor and ipsum Martex sapien.....
                </a>
              </h4>
              <div className="time">1 Month Ago </div>
              <p>
                lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                eleifend sed ex. Donec quis magna sed felis elementum blandit
                nec quis sem. Maecen.
              </p>
              <a href="blog-detail" className="view_post">
                View Post
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_blk">
            <div className="tag">Reebok</div>
            <div className="image">
              <a href="blog-detail">
                <img
                  src="/images/blog_03.jpg"
                  width={600}
                  height={500}
                  alt="Blog Post"
                />
              </a>
            </div>
            <div className="text">
              <h4>
                <a href="blog-detail">
                  Congue magna tempor and ipsum Martex sapien.....
                </a>
              </h4>
              <div className="time">1 Month Ago </div>
              <p>
                lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                eleifend sed ex. Donec quis magna sed felis elementum blandit
                nec quis sem. Maecen.
              </p>
              <a href="blog-detail" className="view_post">
                View Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* posts */}
  <section id="folio">
    <div className="contain">
      <div className="content">
        <h3>What our clients say about us</h3>
        <p>Our customers say Excellent</p>
      </div>
      <div id="slick-folio" className="slick-carousel slick-slider">
        <div className="item">
          <div className="folio_blk">
            <div className="text">
              <div className="comma">
                <img
                  src="/images/comma.svg"
                  width={100}
                  height={100}
                  alt="Comma Icon"
                />
              </div>
              <p>
                “I've never experienced such an exciting way to get my hands on
                premium tracksuits! The bidding process was seamless, and the
                quality of the tracksuit I won exceeded my expectations.
                Definitely my go-to for athletic wear now!”
              </p>
            </div>
            <div className="image">
              <img
                src="/images/folio_01.jpg"
                width={800}
                height={600}
                alt="Folio Photo"
              />
              <div className="btm">
                <div className="name">Albert Flores</div>
                <div className="desg">Product Manager at Jomanar</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="folio_blk">
            <div className="text">
              <div className="comma">
                <img
                  src="/images/comma.svg"
                  width={100}
                  height={100}
                  alt="Comma Icon"
                />
              </div>
              <p>
                “I've never experienced such an exciting way to get my hands on
                premium tracksuits! The bidding process was seamless, and the
                quality of the tracksuit I won exceeded my expectations.
                Definitely my go-to for athletic wear now!”
              </p>
            </div>
            <div className="image">
              <img
                src="/images/folio_02.jpg"
                width={800}
                height={600}
                alt="Folio Photo"
              />
              <div className="btm">
                <div className="name">Jennifer Kem</div>
                <div className="desg">Product Manager at Jomanar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* folio */}
</>

      <Footer />
    </>
  );
}
