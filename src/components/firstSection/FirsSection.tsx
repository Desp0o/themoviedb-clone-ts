import { useState } from "react";
import "./firstSection.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScrollTopSearchPage } from "../../store/searchValues";

export default function FirsSection() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()


  const dispatch = useDispatch()
  const redirect = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === 'Enter' && searchValue.length !==0) {return navigate(`/pages/Search/${searchValue}`)}
    dispatch(setScrollTopSearchPage())
  }


  



  return (
    <div className="first_Section">
      <h2>Welcome.</h2>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>

      <div className="input_container">
        <input
        onKeyDown={redirect}
          type="text"
          name="movie_search"
          placeholder="Search a movie, tv show..."
          className="search_input"
          onChange={(e) => setSearchValue(e.target.value.length === 0 ? '1' : e.target.value)}

        />

        <Link to={searchValue.length !== 0 ? `/pages/Search/${searchValue}` : "/"}>
          <div className="search_btn">Search</div>
        </Link>
      </div>
    </div>
  );
}
