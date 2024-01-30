import Filter from "./FilterComponent"
import "./PopularComponents.css"
import SortComponent from "./SortComponent"
import FilterComponentChild from "./FilterComponentChild"

export default function PopularFilter() {
  return (
    <div className='PopularFilter'>
        <Filter title="Sort" child={<SortComponent />} />
        <Filter title="Filters" child={<FilterComponentChild />} />
    </div>
  )
}
