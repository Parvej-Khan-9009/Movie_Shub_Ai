import React from "react";
import { useEffect } from "react";
import { GET_API_OPTION, POPULOR_ANIME_API } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import { addAnime} from "../utils/movieSlice";

function Anime() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.movie.anime);
  
    useEffect(() => {
      getAnime();
    }, []);
  
    if (!data) return null;
 
    async function getAnime() {
      const res = await fetch(POPULOR_ANIME_API, GET_API_OPTION);
      const data = await res.json();
      dispatch(addAnime(data.results));
    }

    return (
      <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
        <MovieCards movieInfo={data} category="Populor Anime" />
      </div>
    );
} 

export default Anime