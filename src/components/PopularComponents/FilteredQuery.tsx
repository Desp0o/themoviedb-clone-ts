import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

import noImageOverlay from "../../assets/images/noImageOverlay.webp"

interface RootState {
  chooseOption: {
    genre: string[];
    voteRange: number | string;
    value: string;
    isFiltering: boolean;
    filterDependencies: string | number[];
  };
  loadContent: {
    isLoadedFilteredContent: boolean;
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
  const genre = useSelector((state: RootState) => state.chooseOption.genre);
  const voteRangeValue = useSelector(
    (state: RootState) => state.chooseOption.voteRange
  );
  const sortMethod = useSelector(
    (state: RootState) => state.chooseOption.value
  );
  const filterDependencies = useSelector(
    (state: RootState) => state.chooseOption.filterDependencies
  );

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["filtered-move-db", filterDependencies],
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
                    image={movie.poster_path !== null ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` : noImageOverlay}
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
    </>
  );
};

export default FilteredQuery;
