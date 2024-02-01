import "./PopularComponents.css";
import FilteredQuery from "./FilteredQuery";
import MovieQueryDB from "./MovieQueryDB";



export default function PopularList() {
  

    
    
  return (
    <div className="popular_list_container">
      <MovieQueryDB />  <FilteredQuery />
     

    </div>
  );
}
