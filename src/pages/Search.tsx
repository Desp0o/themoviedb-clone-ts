import { useParams } from "react-router-dom";
import "../components/searchComponents/Search.css";
import SearhedMovieQuery from "../components/searchComponents/SearchedMovieQuery";
import { useSelector } from "react-redux";
import MovieLengthComponent from "../components/searchComponents/MovieLengthComponent";
import { setMovieLength, setTvShowLength } from "../store/searchValues";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

interface RootState {
  searchOptions: {
    movieLength: number;
    tvShwowLength: number;
    scrollTopSearchPage: boolean;
  };
}

const Search = () => {
  const { name } = useParams();

  const [isMovieList, setIsMovieList] = useState(
    localStorage.getItem("isMovieList") || true
  );

  const movieQuery = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&page=`;

  const tvShowQuery = `https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&page=`;

  const movieLength = useSelector(
    (state: RootState) => state.searchOptions.movieLength
  );
  const tvShowsLength = useSelector(
    (state: RootState) => state.searchOptions.tvShwowLength
  );

  const scrollTopSearchPage = useSelector(
    (state: RootState) => state.searchOptions.scrollTopSearchPage
  );

  const showMovie = () => {
    setIsMovieList(true);
    localStorage.setItem("isMovieList", "true");
  };

  const showTvSHows = () => {
    setIsMovieList(false);
    localStorage.setItem("isMovieList", "false");
  };

  useEffect(() => {
    if (localStorage.getItem("isMovieList") === "true") {
      setIsMovieList(true);
    } else if (localStorage.getItem("isMovieList") === "false") {
      setIsMovieList(false);
    }
  }, [isMovieList]);

  const [foo, setFoo] = useState(false);
  useEffect(() => {
    console.log(scrollTopSearchPage + "scroll");
  }, [foo]);

  return (
    <>
      <ScrollToTop />
      <div className="search">
        <div className="search_inner">
          <div className="search_left_block">
            <div className="search_result">
              <h3 onClick={() => setFoo(true)}>Search Results</h3>
            </div>

            <div style={isMovieList || localStorage.getItem("isMovieList")==="true" ? { backgroundColor: "#EEEEEE",borderRadius:"5px" } : { backgroundColor: "unset", borderRadius:"5px"}}>
              <MovieLengthComponent
                name="Movies"
                length={movieLength}
                funName={() => showMovie()}
              />
            </div>
            <div style={!isMovieList || localStorage.getItem("isMovieList")==="false" ? { backgroundColor: "#EEEEEE",borderRadius:"5px" } : { backgroundColor: "unset", borderRadius:"5px"}}>
            <MovieLengthComponent
              name="Tv Shows"
              length={tvShowsLength}
              funName={() => showTvSHows()}
            />
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div
              style={isMovieList ? { display: "block" } : { display: "none" }}
            >
              <SearhedMovieQuery
                name={name}
                queryName="searched-movie"
                queryPath={movieQuery}
                dispatchName={setMovieLength}
              />
            </div>

            <div
              style={isMovieList ? { display: "none" } : { display: "block" }}
            >
              <SearhedMovieQuery
                isTv={true}
                name={name}
                queryName="searched-tvShows"
                queryPath={tvShowQuery}
                dispatchName={setTvShowLength}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
