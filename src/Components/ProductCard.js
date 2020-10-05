import React from "react";
import "./css/ProductCard.css";
import { getRandomColor } from "../lib/utils";
import { Button } from "../Core/Button";
export default function ProductCard(props) {
  const onRemove = () => {
    if (props.onRemove) {
      props.onRemove();
    }
  };
  return (
    <div className="productCardBase">
      <div className="productCardLeft">
        <div
          className="initialWrapper"
          style={{
            backgroundColor: getRandomColor()
          }}
        >
          {props.category
            ? props.category
                .split(" ")
                .splice(0, 2)
                .map(i => (i ? i[0] : ""))
                .join("")
            : "WC"}
        </div>
      </div>
      <div className="productRight">
        <div className="productCardName">
          <div className="productCardLabel">Product Name</div> {props.name}
        </div>
        <div className="brandName">
          {" "}
          <div className="productCardLabel">Category Name</div>
          {props.brand}
        </div>
        <div className="brandName">
          {" "}
          <div className="productCardLabel">Brand Name</div>
          {props.category}
        </div>
        <div className="brandName">
          {" "}
          <div className="productCardLabel">Quantity</div>
          {props.quantity}
        </div>
        <div className="buttonsWrapper">
          <Button
            label="Remove"
            height={30}
            width={90}
            backgroundColor="red"
            onClick={onRemove}
          />
        </div>
      </div>
    </div>
  );
}
