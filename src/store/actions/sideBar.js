import axios from "axios";

import { SIDE_BAR } from "../types";

export const sideBar = () => async (dispatch) => {
  try {
    dispatch({ type: SIDE_BAR.SIDE_BAR_LOADING });

    const { data } = await axios.get("https://api.thecatapi.com/v1/categories");
    
    dispatch({ type: SIDE_BAR.SIDE_BAR_SUCCESS, data });
    
  } catch (e) {
      
    dispatch({ type: SIDE_BAR.SIDE_BAR_FAIL, error: e?.message });
  }
};
