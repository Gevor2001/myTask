import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { catPage } from "../../store/actions/catPage";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";

import * as S from "./styles";

export const CatPage = () => {
  const { cats, catsLoading } = useSelector((state) => state.catPage);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(catPage({ isShowMore: true }));
  };

  return (
    <Layout>
      <S.Container>
        <S.Box>
          {catsLoading && cats.length ? <Loading /> : null}
          {cats.map(({ url, id }) => (
            <S.Img key={id} src={url} alt="cat" />
          ))}
          {cats.length ? (
            <S.Button onClick={handleClick}>Show More</S.Button>
          ) : null}
        </S.Box>
      </S.Container>
    </Layout>
  );
};
