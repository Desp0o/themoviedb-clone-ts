import { useParams } from "react-router-dom";
import "../components/searchComponents/Search.css";
import SearhedMovieQuery from "../components/searchComponents/SearchedMovieQuery";
import { useSelector } from "react-redux";
import MovieLengthComponent from "../components/searchComponents/MovieLengthComponent";

interface RootState {
  searchOptions: {
    movieLength: number;
  };
}

const Search = () => {
  const { name } = useParams();

  const movieLength = useSelector(
    (state: RootState) => state.searchOptions.movieLength
  );

  return (
    <div className="search">
      <div className="search_inner">
        <div className="search_left_block">
          <div className="search_result">
            <h3>Search Results</h3>
          </div>

          <MovieLengthComponent name="Movies" length={movieLength} />
        </div>

        <div className="" style={{ width: "100%" }}>
          <SearhedMovieQuery name={name} />
        </div>
      </div>
    </div>
  );
};

export default Search;
