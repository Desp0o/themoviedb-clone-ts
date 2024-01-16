import axios from "axios";
import "./SingleMoviePage.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SingleMovieTitle from "../../components/singleMovieComponents/SingleMovieTitle";

export default function SingleMoviePage() {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY2;

  const { isLoading, isFetching, data } = useQuery("single-movie", () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
  });

  if (isLoading) {
    console.log("loading");
  } else {
    console.log(data);
  }
  

  return (
    <div className="SingleMoviePage">
      <div className="SingleMoviePage_backdrop">
        {isLoading || isFetching ? (
          <div className="backdrop_image_loading" />
        ) : (
          <img
            src={`http://www.themoviedb.org/t/p/w1920_and_h800_bestv2${data?.data.backdrop_path}`}
            alt="backdrop"
            className="backdrop_image"
          />
        )}

        <div className="backdrop_inner">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.data.poster_path}`}
            className="single_poster"
            alt="single_poster"
          />

          <SingleMovieTitle
            title={data?.data.title}
            date={data?.data.release_date}
            genre={data?.data.genres}
          />
        </div>
      </div>
    </div>
  );
}
