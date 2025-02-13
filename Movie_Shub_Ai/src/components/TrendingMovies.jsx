import React from "react";
import { useEffect } from "react";
import { GET_API_OPTION, TRENDING_MOVIE_API } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
import MovieCards from "./MovieCards";

function TrendingMovies() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.movie.trendingMovie);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  if (!data) return null;  

  async function getTrendingMovies() {
    const res = await fetch(TRENDING_MOVIE_API, GET_API_OPTION);
    const data = await res.json();
    dispatch(addTrendingMovie(data.results));
  }

  return (
    <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
      <MovieCards movieInfo={data} category="Trending Movies" />
    </div>
  );
}

export default TrendingMovies;