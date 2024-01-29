import { ReactNode, useState } from "react";
import dropDownArrow from "../../assets/icons/dropdown-arrow.svg";

interface filterProps {
  title: string;
  child?: ReactNode;
}

const Filter: React.FC<filterProps> = ({ title, child }) => {
  const [sortClass, setSortClass] = useState('sort_popular')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    
    if(!isExpanded){
        setIsExpanded(true)
        setSortClass('sort_popular open')
        
    }else{
        setIsExpanded(false)
        setSortClass('sort_popular')
    }
    
  }

  return (
    <div className={sortClass} >

      <div className="sort_popular_type_arrow" onClick={handleClick}>
        <p>{title}</p>

        <img
          src={dropDownArrow}
          alt="drop down arrow"
          className="drop_down_arrow"
        />
      </div>

      <div className="filter_content">
        {child}
      </div>
    </div>
  );
};

export default Filter;
