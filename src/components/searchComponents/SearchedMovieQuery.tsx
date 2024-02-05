import { useInfiniteQuery } from "react-query";
import axios from "axios";
import "./Search.css";
import React from "react";
import MovieCard from "../movieCard/MovieCard";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import ErrorScreen from "../ErrorScreen";
import noImageOverlay from "../../assets/images/glyphicons-picture.webp";

interface SerachedItemProp {
  name: string | undefined;
}

interface movieProps {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  overview: string;
  poster_path: string;
}

const SearhedMovieQuery: React.FC<SerachedItemProp> = ({name}) => {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery(
    ["searched-movie", name],
    ({ pageParam = 1 }) => {
      return axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&page=${pageParam}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            Accept: "application/json",
          },
        }
      );
    },
    {
      getNextPageParam: (_lastPage, pages) => {
        return pages.length + 1;
      },
    }
  );


  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorScreen errorName={error} />
      ) : (
        data?.pages.map((page, pageIndex) => (
          <div className="searched_list" key={pageIndex}>
            {page.data.results.map((movie: movieProps, index: number) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  rating={0}
                  overview={movie.overview}
                  date={movie.release_date}
                  movieId={movie.id}
                  popularStyleWidth='search_page_style'
                  image={
                    movie.poster_path !== null
                      ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
                      : noImageOverlay
                  }
                />
              );
            })}
          </div>
        ))
      )}
    </div>
  );
};

export default SearhedMovieQuery;
