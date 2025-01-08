// pages/index.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />
      <>
      <section id="catalog">
  <div className="contain">
    <div className="content">
      <h3>Women</h3>
      <p>500+ results.</p>
      <div className="filter_blk">
        <form action="" method="get">
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Size
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Material
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Color
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Brand
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Price
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Condition
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle chevron"
              data-bs-toggle="dropdown"
            >
              Sort By
            </button>
            <ul className="dropdown-menu">
              <li>
                <button type="button">Lorem ipsum dolor</button>
              </li>
              <li>
                <button type="button">Harum dolorum, repellat</button>
              </li>
              <li>
                <button type="button">Culpa obcaecati</button>
              </li>
              <li>
                <button type="button">Amet eligendi corporis</button>
              </li>
              <li>
                <button type="button">Blanditiis enim ex</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <div className="row card_row">
      <div className="col">
        <div className="product_item mini">
          <button type="button" className="like_btn">
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/01.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/02.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/03.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/04.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/05.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/06.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/07.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/08.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/09.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/10.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/11.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/12.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/01.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/02.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/03.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/04.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/05.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/06.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/07.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/08.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/09.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/10.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/11.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/12.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/01.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/01.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/02.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/03.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/04.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/05.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/06.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/07.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/08.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/09.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/10.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/11.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/12.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/01.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/02.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/03.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/04.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/05.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/06.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/07.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/08.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/09.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/10.jpg" alt="Product Photo" />
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
            <img src="images/icon-heart.svg" alt="Like Button" />
          </button>
          <div className="image">
            <a href="product-detail">
              <img src="images/products/11.jpg" alt="Product Photo" />
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

</>

      <Footer />
    </>
  );
}
