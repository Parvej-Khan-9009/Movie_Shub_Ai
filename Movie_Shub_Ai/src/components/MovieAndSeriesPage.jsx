import React from "react";
import { useParams } from "react-router-dom";
import MoviePage from "./MoviePage";
import { useEffect, useState } from "react";
import { GET_API_OPTION, MOVIE_DATABASE_API, SERIES_DATABASE_API } from "../utils/Constant";
import NoMovieOrSeriesData from "./NoMovieOrSeriesData";
import ContentLoadingShimmerUi from "./ContentLoadingShimmerUi";

function MovieAndSeriesPage() {
  const { mediaType, id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovieOrTvData();
  }, []);

  if (!data) return <ContentLoadingShimmerUi/>

  console.log(data);
  

  if (data?.success == false) return <NoMovieOrSeriesData/>


  async function getMovieOrTvData() {
    if (mediaType == "movie") {
      const movieResponse = await fetch(
        MOVIE_DATABASE_API + id + "?language=en-US",
        GET_API_OPTION
      );
      const movieData = await movieResponse.json();
      setData(movieData);
    } else {
      const seriesResponse = await fetch(
        SERIES_DATABASE_API + id + "?language=en-US",
        GET_API_OPTION
      );
      const seriesData = await seriesResponse.json();
      setData(seriesData);
    }
  }

  return (
    <>
      <MoviePage mediaData={data} mediaType={mediaType} />
    </>
  );
}

export default MovieAndSeriesPage;
