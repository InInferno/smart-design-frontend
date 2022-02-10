import {  
  POST_PRODUCT_REQ,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions/action-types';

const initialState = {
  products: [],
  getProductsReq: false,
  getProductsError: false,
  postProductSuccess: false,
  postProductReq: false,
  postProductError: false
};
  
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case POST_PRODUCT_REQ: {
      return {
        ...state,
        postProductReq: action.boolean
      }
    }
    case POST_PRODUCT_SUCCESS: {
      return {
        ...state,
        postProductSuccess: action.boolean
      }
    }
    case POST_PRODUCT_ERROR: {
      return {
        ...state,
        postProductError: action.boolean
      }
    }
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        getProductsReq: action.boolean
      }
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.products
      }
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        getProductsError: action.boolean
      }
    }
    default: {
      return state;
    }
  }
};
