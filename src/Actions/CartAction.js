export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

export const REMOVE_PRODUCT_REQUEST = "REMOVE_PRODUCT_REQUEST";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT_ERROR = "REMOVE_PRODUCT_ERROR";

export function addProduct(productData) {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    try {
      const result = await api.post("/", productData);
      console.log(result);

      return dispatch({ type: ADD_PRODUCT_SUCCESS, payload: result.data });
    } catch (e) {
      return dispatch({ type: ADD_PRODUCT_ERROR, error: e.message });
    }
  };
}

export function getProducts() {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: GET_PRODUCT_REQUEST });
    try {
      const result = await api.get("/");

      return dispatch({ type: GET_PRODUCT_SUCCESS, payload: result.data });
    } catch (e) {
      return dispatch({ type: GET_PRODUCT_ERROR, error: e.message });
    }
  };
}

export function removeProduct(id) {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: REMOVE_PRODUCT_REQUEST });
    try {
      const result = await api.deleteCall(`/${id}`);
      //   const resultJson = await result.json();

      return dispatch({ type: REMOVE_PRODUCT_SUCCESS, id });
    } catch (e) {
      console.log(e);
      return dispatch({ type: REMOVE_PRODUCT_ERROR, error: e.message });
    }
  };
}
