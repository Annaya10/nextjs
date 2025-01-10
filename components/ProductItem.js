import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="col">
      <div className="product_item">
        <button type="button" className="like_btn">
          <img src="/images/icon-heart.svg" alt="Like Button" />
        </button>
        <div className="image">
          <a href="product-detail">
            <img src={product.image} alt="Product Photo" />
          </a>
        </div>
        <div className="text">
          <div className="title">
            <a href="product-detail">{product.title}</a>
          </div>
          <div className="start_price">
            <small>Starting</small> ${product.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
