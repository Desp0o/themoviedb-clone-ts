import "./PopularComponents.css";
import FilteredQuery from "./FilteredQuery";
import MovieQueryDB from "./MovieQueryDB";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ButtonFilter from "./ButtonFilter";

interface RootState {
  chooseOption: {
    genre: string[];
    voteRange: number | string;
    value: string;
    isFiltering: boolean;
  };
  loadContent: {
    isLoadedFilteredContent: boolean;
  };
}

export default function PopularList() {
  const isLoadedFilteredContent = useSelector(
    (state: RootState) => state.loadContent.isLoadedFilteredContent
  );
  useEffect(() => {
    console.log(isLoadedFilteredContent);
  }, [isLoadedFilteredContent]);

  return (
    <div className="popular_list_container">
      {isLoadedFilteredContent ? <FilteredQuery /> : <MovieQueryDB />}
      <ButtonFilter />
    </div>
  );
}
