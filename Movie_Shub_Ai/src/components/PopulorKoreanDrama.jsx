import React from "react";
import { useEffect } from "react";
import { GET_API_OPTION, KOREAN_DRAMA_API } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import { addPopulorKoreanDrama } from "../utils/movieSlice";

function PopulorKoreanDrama() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.movie.populorKoreanDrama);
  
    useEffect(() => {
      getPopulorKoreanDrama();
    }, []);
  
    if (!data) return null;

    async function getPopulorKoreanDrama() {
      const res = await fetch(KOREAN_DRAMA_API, GET_API_OPTION);
      const data = await res.json();
      dispatch(addPopulorKoreanDrama(data.results));
    }

    return (
      <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
        <MovieCards movieInfo={data} category="Populor Korean Drama" />
      </div>
    );
}

export default PopulorKoreanDrama