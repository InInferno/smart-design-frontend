import { url } from '../../utils/constants';
import {
  POST_PRODUCT_REQ,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,

} from './action-types';

export const postProductReq = (boolean) => ({
  type: POST_PRODUCT_REQ,
  boolean: boolean
})

export const postProductSuccess = (boolean) => ({
  type: POST_PRODUCT_SUCCESS,
  boolean: boolean
})

export const postProductError = (boolean) => ({
  type: POST_PRODUCT_ERROR,
  boolean: boolean
})

export const postProductFetch = (data) =>
  (dispatch) => {
    dispatch(postProductReq(true));
    dispatch(postProductSuccess(false));
    dispatch(postProductError(false));

    fetch(`${url}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status !== 200) {
            throw new Error(`${res.status}`)
        }
        return res.json()
      })
      .then(res => {
        console.log(res)
        dispatch(postProductSuccess(true));
        dispatch(postProductReq(false));
        dispatch(postProductError(false));
      })
      .catch((err) => {
        console.log(err)
        dispatch(postProductReq(false));
        dispatch(postProductError(true));
      });
  }

export const getProductsReq = (boolean) => ({
  type: GET_PRODUCTS_REQUEST,
  boolean: boolean
})

export const getProductsSuccess = (res) => ({
  type: GET_PRODUCTS_SUCCESS,
  products: res
})

export const getProductsError = (boolean) => ({
  type: GET_PRODUCTS_ERROR,
  boolean: boolean
})

export const getProductsFetch = (name, parameterOne, parameterTwo) =>  
  (dispatch) => {
    let handle = '';
    if (name) {
      handle = `name/${name}`;
    } else if (parameterOne) {
      handle = `parameters/parameterOne/${parameterOne}`;
    } else if (parameterTwo) {
      handle = `parameters/parameterTwo/${parameterTwo}`;
    }
    dispatch(getProductsReq(true));
    dispatch(getProductsError(false));
    fetch(`${url}/products/${handle}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`${res.status}`)
        }
        return res.json();
      })
      .then(res => {
        console.log(res)
        dispatch(getProductsSuccess(res))
        dispatch(getProductsReq(false));
      })
      .catch((err) => {
        dispatch(getProductsReq(false));
        console.log('err', err)
        dispatch(getProductsError(true))
      });
  }
