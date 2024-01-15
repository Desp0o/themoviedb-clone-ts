import { useQuery } from "react-query";
import axios from "axios";

export default function TrendingMovies() {
  const { isLoading, data } = useQuery("trending-movies", async () => {
    return await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          accept: "application/json",
        },
      }
    );
  });

  if (isLoading) {
    return <h1>loading...</h1>;
  } else {
    console.log(data);
  }

  return <div></div>;
}
