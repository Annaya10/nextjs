// pages/index.js
import React from "react";
import ProductItem from "@/components/ProductItem";




 
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


export default function Catalog() {
  return (
    <>
  
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
     
    {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
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


    </>
  );
}
