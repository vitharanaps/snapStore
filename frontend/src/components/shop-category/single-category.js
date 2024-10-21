import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SingleCategory = ({ item }) => {

  const router = useRouter();
  
  return (
    <div className="product__category-item mb-20 text-center">
      <div className="product__category-thumb w-img">
        <a
          onClick={() =>
            router.push(
              `/shop?Category=${item.parent
                .toLowerCase()
                .replace("&", "")
                .split(" ")
                .join("-")}`
            )
          }
          style={{ cursor: "pointer" }}
        >
          <Image
            src={item.img}
            alt="image"
            width={100}
            height={100}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </a>
      </div>
      <div className="product__category-content">
        <h3 className="product__category-title">
          <a
            onClick={() =>
              router.push(
                `/shop?Category=${item.parent
                  .toLowerCase()
                  .replace("&", "")
                  .split(" ")
                  .join("-")}`
              )
            }
            style={{ cursor: "pointer" }}
          >
            {item.parent}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default SingleCategory;
