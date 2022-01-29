import { SIDE_BAR } from "../types";

const initialState = {
  catsCategory: [],
  catsCategoryLoading: true,
  catsCategoryFail: "",
};

export const sideBar = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_BAR.SIDE_BAR_LOADING:
      return {
        ...state,
        catsCategoryLoading: true,
      };
    case SIDE_BAR.SIDE_BAR_SUCCESS:
      return {
        ...state,
        catsCategory: action.data,
        catsCategoryLoading: false,
      };
    case SIDE_BAR.SIDE_BAR_FAIL:
      return {
        ...state,
        catsCategoryLoading: false,
        catsCategoryFail: action.error,
      };
    default:
      return state;
  }
};
