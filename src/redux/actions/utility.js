 import { CATCH_ERROR } from './types';

export const handleErrors = (dispatch, response) => dispatch({
  type: CATCH_ERROR,
  data: {
    message: response.statusText,
    status: response.status
  }
});
