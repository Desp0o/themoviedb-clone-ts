import "./PopularComponents.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import MovieCard from "../movieCard/MovieCard";

export default function PopularList() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(["popular-movies-list", page], () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          Accept: "application/json",
        },
      }
    );
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  console.log(data);

  return (
    <div className="PopularList">
      {data?.data.results.map((item: any) => {
        const roundedRating = Math.round(item.vote_average * 10);
        return (
          <MovieCard
            key={item.id}
            title={item.title}
            image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            rating={roundedRating}
            date={item.release_date}
            movieId={item.id}
          />
        );
      })}
    </div>
  );
}
