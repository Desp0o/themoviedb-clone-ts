import saveDashBars from "../../assets/icons/save-list-dash.svg"
import likeIcon from "../../assets/icons/heart.svg"
import bookMarkIcon from "../../assets/icons/bookmark.svg"
import starIcon from "../../assets/icons/star.svg"
import "./singleMovComp.css"

const BookMarkLikeSave = () => {

    const array = [
        saveDashBars, likeIcon, bookMarkIcon, starIcon
    ]

  return (
    <div className='BookMarkLikeSave'>
        {array.map( (item, index) => {
            return(
                <div key={index} className='BookMarkLikeSave_circle'>
                    <img src={item} alt='bookmark' style={{width:"18px"}} />
                </div>
            )
        })}
        
    </div>
  )
}

export default BookMarkLikeSave