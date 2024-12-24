import React from "react";
import { useEffect } from "react";
import { GET_API_OPTION, TOP_RATED_MOVIE_API } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import { addTopRatedMovie } from "../utils/movieSlice";


function TopRatedMovies() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.movie.topRatedMovie);
  
    useEffect(() => {
      getTopRAtedMovies();
    }, []);
  
    if (!data) return null;
  
    async function getTopRAtedMovies() {
      const res = await fetch(TOP_RATED_MOVIE_API, GET_API_OPTION);
      const data = await res.json();
      dispatch(addTopRatedMovie(data.results));
    }
  
    return (
      <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
        <MovieCards movieInfo={data} category="Top Rated Movies" />
      </div>
    );
  }

export default TopRatedMovies