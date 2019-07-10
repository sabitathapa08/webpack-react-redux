import * as types from './constants';

export const loadDefaultRequest = () => ({
  type: types.LOAD_DEFAULT_REQUEST
});

export const loadDefaultSuccess = () => ({
  type: types.LOAD_DEFAULT_SUCCESS
})
export const loadDefaultFailure = () => ({
  type: types.LOAD_DEFAULT_FAILURE
})