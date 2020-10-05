import React, { useState } from "react";
import "./css/AddProductForm.css";
import { Input } from "../Core/Input";
import { Button } from "../Core/Button";
import { ADD_PRODUCT_SUCCESS } from "../Actions/CartAction";
export default function AddProductForm(props) {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [incompleteFields, setIncompleteFields] = useState([]);
  const onSave = async () => {
    let updateFields = [];
    if (!productName) {
      updateFields.push("Product Name");
    }
    if (!brandName) {
      updateFields.push("Brand Name");
    }
    if (!categoryName) {
      updateFields.push("Category Name");
    }
    if (!quantity) {
      updateFields.push("Quantity");
    }
    if (updateFields.length > 0) {
      setIncompleteFields(updateFields);
      return false;
    }
    const productData = {
      name: productName,
      category: categoryName,
      brand: brandName,
      quantity: parseInt(quantity)
    };
    const apiCall = await props.addProduct(productData);
    if (apiCall.type === ADD_PRODUCT_SUCCESS) {
      onReset();
    }
  };
  const onReset = () => {
    setProductName("");
    setBrandName("");
    setCategoryName("");
    setQuantity("");
    setIncompleteFields([]);
  };

  return (
    <section className={"addProductBase"}>
      <h2 className="addProductHeading">Add Product</h2>
      <div className="inputContainer">
        <label className="inputLabel">Product Name</label>
        <div className={"inputWrapper"}>
          <Input
            placeholder="Cool Hand bags"
            onChange={name => setProductName(name)}
            value={productName}
          />
        </div>
      </div>
      <div className="inputContainer">
        <label className="inputLabel">Brand Name</label>
        <div className={"inputWrapper"}>
          <Input
            placeholder="Gucci"
            onChange={name => setBrandName(name)}
            value={brandName}
          />
        </div>
      </div>
      <div className="inputContainer">
        <label className="inputLabel">Category Name</label>
        <div className={"inputWrapper"}>
          <Input
            placeholder="Women Hang Bags"
            onChange={name => setCategoryName(name)}
            value={categoryName}
          />
        </div>
      </div>
      <div className="inputContainer">
        <label className="inputLabel">Quantity</label>
        <div className={"inputWrapper"}>
          <Input
            placeholder="4"
            type="number"
            onChange={name => setQuantity(name)}
            value={quantity}
          />
        </div>
      </div>
      <div className="buttonWrapper">
        <Button label="Save" onClick={onSave} />
        <div className="resetButton">
          <Button
            label="Reset"
            backgroundColor="white"
            color="black"
            borderColor="black"
            onClick={onReset}
          />
        </div>
      </div>
      {incompleteFields.length > 0 ? (
        <div className="errorMessage">
          Please filed {incompleteFields.join(", ")}.
        </div>
      ) : null}
    </section>
  );
}
