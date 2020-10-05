import React from "react";
import AddProductFormContainer from "../Container/AddProductFormContainer";
import "./css/LandingPage.css";
import ProductListContainer from "../Container/ProductListContainer";
export function LandingPage() {
  return (
    <div className="container">
      <div className="box formContainer">
        <AddProductFormContainer />
      </div>

      <div className="box itemContainer">
        <ProductListContainer />
      </div>
    </div>
  );
}
