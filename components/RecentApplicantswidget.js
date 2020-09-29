import { request } from './data';
import { setErrorFlag } from './error';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCTS });

      const responseData = await dispatch(request('/api/products'));

      if (responseData.error) {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          error: `from Venus API: ${responseData.message}`,
        });
        dispatch(setErrorFlag(true));
      } else if (responseData.products.status === 'ERROR') {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          error: `from Venus API: ${responseData.products.message}`,
        });
        dispatch(setErrorFlag(true));
      } else {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          products: responseData.products
        });
        dispatch(setErrorFlag(false));
      }
    } catch (e) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error: e });
    }
  };
}
