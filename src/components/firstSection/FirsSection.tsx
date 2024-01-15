import "./firstSection.css"

export default function FirsSection() {
  return (
    <div className="first_Section">
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>

        <div className="input_container">
        <input type="text" name="movie_search" placeholder="Search a movie, tv show, person......" className="search_input" />
        <div className="search_btn">Search</div>
        </div>
    </div>
  )
}
