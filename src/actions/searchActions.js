import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from "../constants/searchConstants";

export const search = (searchTerm, printType, orderBy, resultsShown) => async (
  dispatch
) => {
  dispatch({
    type: SEARCH_REQUEST,
  });

  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${printType}&orderBy=${orderBy}&maxResults=${resultsShown}&key=${process.env.REACT_APP_GOOGLE_API}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        return response.json();
      }
    })
    .then((data) =>
      dispatch({
        type: SEARCH_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: SEARCH_ERROR,
        payload: error,
      })
    );
};
