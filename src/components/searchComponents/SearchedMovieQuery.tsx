import { useInfiniteQuery } from "react-query";
import axios from "axios";
import "./Search.css";
import React, {useEffect} from "react";
import MovieCard from "../movieCard/MovieCard";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import ErrorScreen from "../ErrorScreen";
import noImageOverlay from "../../assets/images/glyphicons-picture.webp";
import { useDispatch } from "react-redux";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

interface SerachedItemProp {
  name: string | undefined;
  queryPath: string
  dispatchName: ActionCreatorWithPayload<Dispatch | number> 
  queryName: string
  isTv?: boolean
}

interface movieProps {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  overview: string;
  poster_path: string;
}

const SearhedMovieQuery: React.FC<SerachedItemProp> = ({ name, queryPath, dispatchName, queryName, isTv }) => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [queryName, name],
      ({ pageParam = 1 }) => {
        return axios.get(
          `${queryPath}${pageParam}`,
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
        }
      }
    );

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(dispatchName(0));
      if (data) {
        dispatch(dispatchName(data?.pages[0].data.total_results));
      }
    }, [data, dispatch, dispatchName]);


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
                  isTvShow={isTv}
                  title={movie.title}
                  rating={0}
                  overview={movie.overview}
                  date={movie.release_date}
                  movieId={movie.id}
                  popularStyleWidth="search_page_style"
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

      {isFetchingNextPage ? (
        <LoadingSpinner loadingNextPage="loadingNextPage" />
      ) : (
        <button className="fetch_next_movies" onClick={() => fetchNextPage()}>
          Load More
        </button>
      )}
    </div>
  );
};

export default SearhedMovieQuery;
