import { useState } from "react";
import "./firstSection.css";
import { Link, useNavigate } from "react-router-dom";

export default function FirsSection() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

  const redirect = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === 'Enter') {return navigate(`/pages/Search/${searchValue}`)}
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
          placeholder="Search a movie, tv show, person......"
          className="search_input"
          onChange={(e) => setSearchValue(e.target.value.length === 0 ? '1' : e.target.value)}

        />

        <Link to={`/pages/Search/${searchValue}`}>
          <div className="search_btn">Search</div>
        </Link>
      </div>
    </div>
  );
}
