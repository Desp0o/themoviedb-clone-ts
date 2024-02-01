import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";
import ButtonFilter from "./ButtonFilter";

interface RootState {
  chooseOption: {
    genre: string[];
    voteRange: number | string;
    value: string;
  };
}

interface movieProps {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  overview: string;
  poster_path: string;
}

const FilteredQuery = () => {
  const [classForFilterBtn, setClassForFilterBtn] = useState('')
  const genre = useSelector((state: RootState) => state.chooseOption.genre);
  const voteRangeValue = useSelector(
    (state: RootState) => state.chooseOption.voteRange
  );
  const sortMethod = useSelector(
    (state: RootState) => state.chooseOption.value
  );

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["filtered-move-db", [genre, voteRangeValue, sortMethod]],
      ({ pageParam = 1 }) => {
        return axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=${sortMethod}&vote_average.gte=${voteRangeValue}&with_genres=${genre}`,
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

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (
      genre.length !== 0 ||
      voteRangeValue !== 0 ||
      sortMethod !== undefined
    ) {
      console.log("Hoorah");
      setClassForFilterBtn('ButtonFilter open')
    }
    console.log(genre);
  }, [genre, voteRangeValue, sortMethod]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {data?.pages.map((page, pageIndex) => (
            <div className="PopularList" key={pageIndex}>
              {page.data.results.map((movie: movieProps, index: number) => {
                const roundedRating = Math.round(movie.vote_average * 10);
                return (
                  <MovieCard
                    popularStyleWidth="popular_page_style"
                    key={index}
                    title={movie.title}
                    image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                    rating={roundedRating}
                    date={movie.release_date}
                    movieId={movie.id}
                    overview={movie.overview}
                  />
                );
              })}
            </div>
          ))}

          {isFetchingNextPage ? (
            <LoadingSpinner loadingNextPage="loadingNextPage" />
          ) : (
            <button
              className="fetch_next_movies"
              onClick={() => fetchNextPage()}
            >
              Load More
            </button>
          )}
        </>
      )}

      <ButtonFilter nameOfClass={classForFilterBtn}/>
    </>
  );
};

export default FilteredQuery;
