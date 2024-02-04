import "./PopularComponents.css";
import FilteredQuery from "./FilteredQuery";
import MovieQueryDB from "./MovieQueryDB";
import { useSelector } from "react-redux";
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

  return (
    <div className="popular_list_container">
      {isLoadedFilteredContent ? <FilteredQuery /> : <MovieQueryDB />}
      <ButtonFilter />
    </div>
  );
}
