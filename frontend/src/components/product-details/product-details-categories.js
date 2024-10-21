import React from "react";

const ProductDetailsCategories = ({category}) => {

  return (
    <div className="product__details-categories product__details-more">
      <p>Categories:</p>
      <span>
        <a href={`/shop?Category=${category?.name?.toLowerCase()}`}>{category?.name}</a>
      </span>
     
    </div>
  );
};

export default ProductDetailsCategories;
