import axios from "axios";

import { CAT_PAGE } from "../types";

export const catPage =
  ({ id, isShowMore }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CAT_PAGE.CAT_PAGE_LOADING });

      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search/",
        {
          params: {
            limit: 10,
            page: 1,
            category_id: id,
          },
        }
      );

      dispatch({ type: CAT_PAGE.CAT_PAGE_SUCCESS, data, isShowMore });

    } catch (e) {
      
      dispatch({ type: CAT_PAGE.CAT_PAGE_FAIL, error: e?.message });
    }
  };
