import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sideBar } from "../../store/actions/sideBar";
import { catPage } from "../../store/actions/catPage";

import * as S from "./styles";

export const SideBar = () => {
  const catsCategory = useSelector((state) => state.sideBar.catsCategory);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(catPage({ isShowMore: false, id }));
  };

  useEffect(() => dispatch(sideBar()), []);

  return (
    <S.Div>
      {catsCategory.map(({ id, name }) => (
        <S.List onClick={() => handleClick(id)} key={id}>
          {name}
        </S.List>
      ))}
    </S.Div>
  );
};
