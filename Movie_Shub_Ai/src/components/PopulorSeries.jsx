import React from "react";
import { GET_API_OPTION, TRENDING_SERIES } from "../utils/Constant";
import { useEffect } from "react";
import MovieCards from "./MovieCards";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingSeries } from "../utils/movieSlice";

function PopulorSeries() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.movie.trendingSeries);

  useEffect(() => {
    getPopulorSeries();
  }, []);

  if (!data) return null;

  async function getPopulorSeries() {
    const res = await fetch(TRENDING_SERIES, GET_API_OPTION); 
    const resData = await res.json();
    dispatch(addTrendingSeries(resData?.results));
  }

  return (
    <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
      <MovieCards movieInfo={data} category="Trending Series" />
    </div>
  );
}

export default PopulorSeries;
