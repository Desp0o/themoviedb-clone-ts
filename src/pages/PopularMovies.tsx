import PopularFilter from "../components/PopularComponents/PopularFilter"
import PopularList from "../components/PopularComponents/PopularList"
import "../components/PopularComponents/PopularComponents.css"
import ScrollToTop from "../components/ScrollToTop"

export default function PopularMovies() {
  return (
    <div className="PopularMovies">
      <h2 style={{textAlign: 'center'}}>Popular Movies</h2>
      <div className="PopularMovies_inner">
        <ScrollToTop />

        <PopularFilter />
        <PopularList />
      </div>
    </div>
  )
}

