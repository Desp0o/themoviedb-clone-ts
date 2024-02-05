import { useEffect, useState } from "react";
import "./firstSection.css";
import { Link } from "react-router-dom";

export default function FirsSection() {
  const [searchValue, setSearchValue] = useState("");

 

  return (
    <div className="first_Section">
      <h2>Welcome.</h2>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>

      <div className="input_container">
        <input
          type="text"
          name="movie_search"
          placeholder="Search a movie, tv show, person......"
          className="search_input"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Link to={`/pages/Search/${searchValue}`}>
          <div className="search_btn">Search</div>
        </Link>
      </div>
    </div>
  );
}
