import { useParams } from "react-router-dom";
import "../components/searchComponents/Search.css";
import SearhedMovieQuery from "../components/searchComponents/SearchedMovieQuery";

const Search = () => {
  const { name } = useParams();

  return (
    <div className="search">
      <div className="search_inner">
        <div className="search_result">
          <h3>Search Results</h3>
        </div>

        <div className="" style={{ width: "100%" }}>
          <SearhedMovieQuery name={name} />
        </div>
      </div>
    </div>
  );
};

export default Search;
