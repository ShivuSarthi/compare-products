import {
  ADD_TO_COMPARE,
  REMOVE_COMPARE_ITEM,
} from "../constants/compareConstants";

export const compareReducer = (state = { compareItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_COMPARE:
      const item = action.payload;

      const isItemExist = state.compareItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          compareItems: state.compareItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          compareItems: [...state.compareItems, item],
        };
      }
    case REMOVE_COMPARE_ITEM:
      return {
        ...state,
        compareItems: state.compareItems.filter(
          (i) => i.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
