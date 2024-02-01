import "./PopularComponents.css";
import FilteredQuery from "./FilteredQuery";
import MovieQueryDB from "./MovieQueryDB";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface RootState {
  chooseOption:{
    genre: []
  }
}

export default function PopularList() {
  
  const genre = useSelector( (state: RootState) => state.chooseOption.genre)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (genre === undefined) {
      setHide(true);
    }
    
  }, [genre]);
    
  return (
    <div className="popular_list_container">
      {hide ?  <MovieQueryDB /> : <FilteredQuery />}
     

      
    </div>
  );
}
