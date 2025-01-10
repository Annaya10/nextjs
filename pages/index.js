// pages/index.js
import React from "react";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "@/components/ProductItem";
import Blog from "@/components/Blog";
import Slider from "react-slick";
import Testimonials from "@/components/Testimonials";



 
const products = [
  {
    id: 1,
    title: "Women's Hooded Loungewear Set - L / Khaki",
    price: 200,
    image: "/images/products/01.jpg",
  },
  {
    id: 2,
    title: "Men's Athletic Hoodie - XL / Black",
    price: 250,
    image: "/images/products/02.jpg",
  },

];

const blogs = [
  {
    "id": 1,
    "tag": "Reebok",
    "image": "/images/blog_03.jpg",
    "title": "Congue magna tempor and ipsum Martex sapien.....",
    "time": "1 Month Ago",
    "description": "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen."
  },
  {
    "id": 2,
    "tag": "Nike",
    "image": "/images/blog_02.jpg",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "time": "2 Weeks Ago",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra, felis nec pellentesque sodales, est purus vestibulum neque, non commodo est urna eu eros."
  },
  {
    "id": 3,
    "tag": "Adidas",
    "image": "/images/blog_01.jpg",
    "title": "Vestibulum vitae nunc ut urna ullamcorper sollicitudin.",
    "time": "3 Days Ago",
    "description": "Vestibulum vitae nunc ut urna ullamcorper sollicitudin. Quisque eget neque eu augue iaculis tincidunt."
  },

];
export default function Home() {
  var settings = {
    dots: true,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
				},
			},
		],
  };

  
  return (

   
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
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
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

     
      <div>
      <Slider {...settings}>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_01.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_02.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_03.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_04.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_05.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_06.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_07.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_08.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_03.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_04.png" alt="Brand Logo" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <a href="?">
              <Image  width={100}
      height={100}src="/images/brand_05.png" alt="Brand Logo" />
            </a>
          </div>
        </div>

        </Slider>
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
              <Image  width={100}
      height={100}src="/images/browse_vector.png" alt="Browse" />
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
              <Image  width={100}
      height={100}src="/images/bid_vector.png" alt="Bid" />
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
              <Image  width={100}
      height={100}src="/images/winner_vector.png" alt="Winner" />
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
       {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      </div>
    </div>
  </section>
 
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
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      </div>
    </div>
  </section>
  {/* posts */}

  <Testimonials />
  
</>

  );
}
