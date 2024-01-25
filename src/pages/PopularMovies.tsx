import PopularFilter from "../components/PopularComponents/PopularFilter"
import PopularList from "../components/PopularComponents/PopularList"
import "./styles/PopularMovies.css"

export default function PopularMovies() {
  return (
    <div className="PopularMovies">
      <div className="PopularMovies_inner">
        <h2>Popular Movies</h2>

        <PopularFilter />
        <PopularList />
      </div>
    </div>
  )
}

