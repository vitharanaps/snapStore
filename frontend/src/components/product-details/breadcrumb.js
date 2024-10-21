import React from "react";
import Link from "next/link";
import Home from "@svg/home";
// internal

const ProductDetailsBreadcrumb = ({title}) => {
  console.log("title",title)
  return (
    <section className="breadcrumb__area breadcrumb__style-9 pt-75 include-bg">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7">
            <div className="breadcrumb__content p-relative z-index-1">
              <div className="breadcrumb__list has-icon">
                <span className="breadcrumb-icon">
                  <Home />
                </span>
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span className="dvdr">
                  <i className="fa-regular fa-angle-right"></i>
                </span>
                <span>
                  <a href="/shop">Products</a>
                </span>
                <span className="dvdr">
                  <i className="fa-regular fa-angle-right"></i>
                </span>
                <span>
                  <a href={`/shop?Category=${title?.parent_cat?.toLowerCase()}`}>{title?.parent_cat}</a>
                </span>
              { title?.child_cat && (
              <>
              <span className="dvdr">
                  <i className="fa-regular fa-angle-right"></i>
                </span>
                <span>{title?.child_cat}</span>
                </>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsBreadcrumb;
