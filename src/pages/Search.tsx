import { useParams } from "react-router-dom"
import "../components/searchComponents/Search.css"

const Search = () => {

    const {name} = useParams()

  return (
    <div className="search">
        <div className="search_inner">
            <div className="search_result">
                <h3>Search Results</h3>
            </div>
        </div>
    </div>
  )
}

export default Search