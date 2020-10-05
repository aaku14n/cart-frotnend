import { connect } from "react-redux";
import { addProduct } from "../Actions/CartAction";
import AddProductForm from "../Components/AddProductForm";
const mapDispatchToProps = dispatch => {
  return {
    addProduct: productData => {
      return dispatch(addProduct(productData));
    }
  };
};
const mapStateToProps = state => {
  return {
    ...state
  };
};
const AppProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);
export default AppProductFormContainer;
