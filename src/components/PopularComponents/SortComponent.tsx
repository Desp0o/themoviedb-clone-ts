import { useDispatch, useSelector } from "react-redux";
import { setOption, setIsFilteringTrue } from "../../store/sortingValues";
import { ChangeEvent } from "react";

interface inputProps {
  e: ChangeEvent<HTMLSelectElement>;
  target: HTMLSelectElement;
  value: HTMLSelectElement;
}

interface RootState {
  chooseOption: {
    value: string;
  };
}

const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (store: RootState) => store.chooseOption.value
  );

  const selectOption = (e: inputProps["e"]) => {
    dispatch(setOption(e.target.value));
    dispatch(setIsFilteringTrue())
  };

  return (
    <div className="sort_child">
      <p>Sort Results By </p>

      <select
        className="sorting_options"
        value={selectedOption}
        onChange={(e) => selectOption(e)}
      >
        <option value="popularity.desc">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="vote_average.desc">Rating Descending</option>
        <option value="vote_average.asc">Rating Ascending</option>
      </select>
    </div>
  );
};

export default SortComponent;
