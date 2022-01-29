import { CAT_PAGE } from "../types";

const initialState = {
  cats: [],
  catsLoading: true,
  catsFail: "",
};

export const catPage = (state = initialState, action) => {
  switch (action.type) {
    case CAT_PAGE.CAT_PAGE_LOADING:
      return {
        ...state,
        catsLoading: true,
      };
    case CAT_PAGE.CAT_PAGE_SUCCESS:
      return {
        ...state,
        cats: action.isShowMore ? [...state.cats, ...action.data] : action.data,
        catsLoading: false,
      };
    case CAT_PAGE.CAT_PAGE_FAIL:
      return {
        ...state,
        catsLoading: false,
        catsFail: action.error,
      };
    default:
      return state;
  }
};
