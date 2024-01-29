import PopularFilter from "../components/PopularComponents/PopularFilter"
import PopularList from "../components/PopularComponents/PopularList"
import "../components/PopularComponents/PopularComponents.css"

export default function PopularMovies() {
  return (
    <div className="PopularMovies">
      <h2 style={{textAlign: 'center'}}>Popular Movies</h2>
      <div className="PopularMovies_inner">
        

        <PopularFilter />
        <PopularList />
      </div>
    </div>
  )
}

