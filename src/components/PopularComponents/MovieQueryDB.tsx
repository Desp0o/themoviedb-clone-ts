import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import MovieCard from "../movieCard/MovieCard";

interface movieProps {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  overview: string;
  poster_path: string;
}

const MovieQueryDB = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["popular-movies-list"],
      ({ pageParam = 1 }) => {
        return axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageParam}`,
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
    </>
  );
};

export default MovieQueryDB;
