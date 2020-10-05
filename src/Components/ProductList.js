import React, { useEffect } from "react";
import "./css/ProductList.css";
import ProductCard from "./ProductCard";
export default function ProductList(props) {
  useEffect(() => {
    props.getProducts();
  }, []);
  console.log(props);
  const onRemove = id => {
    console.log(id);
    props.removeProduct(id);
  };
  console.log(props.products);
  return (
    <div className="productListBase">
      <h1>Products</h1>
      {props.products && props.products.length > 0 ? (
        props.products.map((i, id) => (
          <ProductCard {...i} key={id} onRemove={() => onRemove(i.id)} />
        ))
      ) : (
        <div className="noProducts">No Products in Cart</div>
      )}
    </div>
  );
}
