import { useQuery } from "react-query";
import axios from "axios";
import "./PopularTvShows.css";
import MovieCard from "../movieCard/MovieCard";
import MovieListLoadingComponent from "../movieListLoading/MovieListLoadingComponent";

export default function PopularTvShows() {
  const { isLoading, data } = useQuery("popular-tvshows", () => {
    return axios.get("https://api.themoviedb.org/3/tv/popular", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        accept: "application/json",
      },
    });
  });

  return (
    <div className="popular_tv_show_list">
      <p className="popular_tv_show_title">Popular TV Shows</p>

      <div className="popular_tv_show_list_inner">
        {isLoading ? (
          <MovieListLoadingComponent />
        ) : (
          data?.data.results.map((item: any) => {
            const roundedRating = Math.round(item.vote_average * 10);

            return (
              <MovieCard
                key={item.id}
                title={item.original_name}
                image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                rating={roundedRating}
                date={item.first_air_date}
                movieId={item.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
