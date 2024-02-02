
import { useSelector, useDispatch } from "react-redux";
import { setIsFilteringFalse } from "../../store/sortingValues";
import { setLoadFilterData } from "../../store/loadContent";

interface RootState {
  chooseOption: {
    isFiltering:string
  }
}

const ButtonFilter = () => {

  const dispatch = useDispatch()

  const closeButton = () => {
    dispatch(setIsFilteringFalse())
    dispatch(setLoadFilterData())
  }

  const buttonClass = useSelector( (state: RootState) => state.chooseOption.isFiltering)

  return (
    <div className={buttonClass ? 'ButtonFilter open' : 'ButtonFilter' } onClick={closeButton}>Search</div>
  )
}

export default ButtonFilter