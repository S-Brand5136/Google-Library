import {
  SEARCH_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
} from "../constants/searchConstants";

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { loading: true };
    case SEARCH_SUCCESS:
      return { loading: false, searchBookList: action.payload };
    case SEARCH_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
