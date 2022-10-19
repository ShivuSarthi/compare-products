import {
  ADD_TO_COMPARE,
  REMOVE_COMPARE_ITEM,
} from "../constants/compareConstants";
import axios from "axios";

export const addItemsToCompare =
  (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: ADD_TO_COMPARE,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });

    localStorage.setItem(
      "compareItems",
      JSON.stringify(getState().compare.compareItems)
    );
  };

//Remove from cart
export const removeItemsFromCompare = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_COMPARE_ITEM,
    payload: id,
  });
  localStorage.setItem(
    "compareItems",
    JSON.stringify(getState().compare.compareItems)
  );
};
