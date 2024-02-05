import { useParams } from "react-router-dom";
import "../components/searchComponents/Search.css";
import SearhedMovieQuery from "../components/searchComponents/SearchedMovieQuery";
import { useSelector } from "react-redux";
import MovieLengthComponent from "../components/searchComponents/MovieLengthComponent";
import { setMovieLength, setTvShowLength } from "../store/searchValues";

interface RootState {
  searchOptions: {
    movieLength: number;
    tvShwowLength: number
  };
}

const Search = () => {
  const { name } = useParams();

  const movieQuery = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&page=`
                      
  const tvShowQuery = `https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&page=`

  const movieLength = useSelector(
    (state: RootState) => state.searchOptions.movieLength
  );
  const tvShowsLength = useSelector(
    (state: RootState) => state.searchOptions.tvShwowLength
  );


  return (
    <div className="search">
      <div className="search_inner">
        <div className="search_left_block">
          <div className="search_result">
            <h3>Search Results</h3>
          </div>

          <MovieLengthComponent name="Movies" length={movieLength} />
          <MovieLengthComponent name="Tv Shows" length={tvShowsLength} />

        </div>

        <div className="" style={{ width: "100%" }}>
          <SearhedMovieQuery name={name} queryName="searched-movie" queryPath={movieQuery} dispatchName={setMovieLength}/>
          <SearhedMovieQuery name={name} queryName="searched-tvShows" queryPath={tvShowQuery} dispatchName={setTvShowLength}/>
        </div>
      </div>
    </div>
  );
};

export default Search;
