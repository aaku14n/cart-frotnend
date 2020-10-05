import { connect } from "react-redux";
import ProductList from "../Components/ProductList";
import { getProducts, removeProduct } from "../Actions/CartAction";
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
    removeProduct: id => {
      dispatch(removeProduct(id));
    }
  };
};
const mapStateToProps = state => {
  return {
    products: state.cartReducer.products
  };
};
const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
export default ProductListContainer;
