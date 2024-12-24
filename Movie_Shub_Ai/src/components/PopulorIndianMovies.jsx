import React from "react";
import { useEffect } from "react";
import { BOLLYWOOD_MOVIE_API, GET_API_OPTION } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import { addPopulorIndianMovies } from "../utils/movieSlice";

function PopulorIndianMovies() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.movie.populorIndianMovies);
  
    useEffect(() => {
      getTopRAtedMovies();
    }, []);
  
    if (!data) return null;
  
    async function getTopRAtedMovies() {
      const res = await fetch(BOLLYWOOD_MOVIE_API , GET_API_OPTION);
      const data = await res.json();
      dispatch(addPopulorIndianMovies(data.results));
    }

    return (
      <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
        <MovieCards movieInfo={data} category="Populor Bollywood Movies" />
      </div>
    );
  }

export default PopulorIndianMovies