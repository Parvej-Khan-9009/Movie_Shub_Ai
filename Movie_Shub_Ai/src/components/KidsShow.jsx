import React from "react";
import { useEffect } from "react";
import { GET_API_OPTION, KIDS_SHOW_API } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import { addKidsShow } from "../utils/movieSlice";

function KidsShow() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.movie.kidsShow);
  
    useEffect(() => {
      getKidsShow();
    }, []);
  
    if (!data) return null;

    async function getKidsShow() {
      const res = await fetch(KIDS_SHOW_API, GET_API_OPTION);
      const data = await res.json();
      dispatch(addKidsShow(data.results));
    }

    return (
      <div className="lg:pt-14 md:pt-[25px] sm:pt-[20px] pt-[15px]">
        <MovieCards movieInfo={data} category="Kids Show" />
      </div>
    );
}

export default KidsShow