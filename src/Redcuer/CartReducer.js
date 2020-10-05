import * as cartAction from "../Actions/CartAction";
import cloneDeep from "lodash.clonedeep";
const initialState = {
  products: [],
  fetchDataLoading: false,
  actionLoading: false
};
const cartReducer = (state = initialState, action) => {
  let currentProduct;
  switch (action.type) {
    case cartAction.ADD_PRODUCT_REQUEST:
      return Object.assign({}, state, {
        actionLoading: true
      });
    case cartAction.ADD_PRODUCT_SUCCESS:
      currentProduct = cloneDeep(state.products);
      currentProduct.unshift(action.payload);
      return Object.assign({}, state, {
        actionLoading: false,
        products: currentProduct
      });
    case cartAction.ADD_PRODUCT_ERROR:
      return Object.assign({}, state, {
        actionLoading: false
      });

    case cartAction.GET_PRODUCT_REQUEST:
      return Object.assign({}, state, {
        fetchDataLoading: true
      });
    case cartAction.GET_PRODUCT_SUCCESS:
      return Object.assign({}, state, {
        fetchDataLoading: false,
        products: action.payload ? action.payload.reverse() : []
      });
    case cartAction.GET_PRODUCT_ERROR:
      return Object.assign({}, state, {
        fetchDataLoading: false
      });

    case cartAction.REMOVE_PRODUCT_REQUEST:
      return Object.assign({}, state, {
        fetchDataLoading: true
      });
    case cartAction.REMOVE_PRODUCT_SUCCESS:
      currentProduct = cloneDeep(state.products);
      let index = currentProduct.findIndex(i => i.id === action.id);
      if (index >= 0) {
        currentProduct.splice(index, 1);
      }

      return Object.assign({}, state, {
        fetchDataLoading: false,
        products: currentProduct
      });
    case cartAction.REMOVE_PRODUCT_ERROR:
      return Object.assign({}, state, {
        fetchDataLoading: false
      });

    default:
      return state;
  }
};
export default cartReducer;
