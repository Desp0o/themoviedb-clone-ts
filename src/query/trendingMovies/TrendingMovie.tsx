import { useQuery } from "react-query";
import axios from "axios";
import MovieCard from "../../components/movieCard/MovieCard";
import "./trendingMovies.css";

export default function TrendingMovies() {
  const { isLoading, data } = useQuery("trending-movies", () => {
    return axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          accept: "application/json",
        },
      }
    );
  });

  return (
    <div className="trending_movie_list">
      <p>Trending</p>

      <div className="trending_movie_list_inner">
        {data?.data.results.map((item: any) => {
          const roundedRating = Math.round(item.vote_average * 10);

          return (
            <MovieCard
              key={item.id}
              title={item.title}
              image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
              rating={roundedRating}
              date={item.release_date}
            />
          );
        })}
      </div>
    </div>
  );
}
