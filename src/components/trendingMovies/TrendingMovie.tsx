import { useQuery } from "react-query";
import axios from "axios";
import MovieCard from "../movieCard/MovieCard";
import "./trendingMovies.css";
import { useState } from "react";

export default function TrendingMovies() {
  const day = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const week = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";

  const [path, setPath] = useState(day);
  const [toggler, setToggler] = useState("toggler_btn_left");
  const [dayTxt, setDayTxt] = useState("active_trending_day_txt");
  const [weekTxt, setWeekTxt] = useState("");

  const changePath = () => {
    if (path === day) {
      setPath(week);
      setToggler("toggler_btn_right");
      setDayTxt("");
      setWeekTxt("active_trending_day_txt");
    } else {
      setPath(day);
      setToggler("toggler_btn_left");
      setDayTxt("active_trending_day_txt");
      setWeekTxt("");
    }

    refetch();
  };

  const { isLoading, data, refetch } = useQuery(
    ["trending-movies", path],
    () => {
      return axios.get(path, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          accept: "application/json",
        },
      });
    }
  );

  return (
    <div className="trending_movie_list">
      <div className="trending_title_and_toggler">
        <p className="trending_title">Trending</p>

        <div
          className="trending_toggler"
          onClick={() => {
            changePath();
          }}
        >
          <div className={toggler} />
          <p className={dayTxt}>Today</p>
          <p className={weekTxt}>This Week</p>
        </div>
      </div>

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
