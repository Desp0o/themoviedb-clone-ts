
import { useSelector, useDispatch } from "react-redux";
import { setFilterDependencies, setIsFilteringFalse } from "../../store/sortingValues";
import { setLoadFilterData } from "../../store/loadContent";


interface RootState {
  chooseOption: {
    genre: string[];
    voteRange: number | string;
    value: string;
    isFiltering: boolean
  };
  loadContent:{
    isLoadedFilteredContent:boolean
  }
}

const ButtonFilter = () => {

  const genre = useSelector((state: RootState) => state.chooseOption.genre);
  const voteRangeValue = useSelector((state: RootState) => state.chooseOption.voteRange);
  const sortMethod = useSelector((state: RootState) => state.chooseOption.value);

  const dispatch = useDispatch()

  const closeButton = () => {
    dispatch(setIsFilteringFalse())
    dispatch(setLoadFilterData())
    dispatch(setFilterDependencies([genre, voteRangeValue, sortMethod]))
  }

  const buttonClass = useSelector( (state: RootState) => state.chooseOption.isFiltering)

  return (
    <div className={buttonClass ? 'ButtonFilter open' : 'ButtonFilter' } onClick={closeButton}>Search</div>
  )
}

export default ButtonFilter