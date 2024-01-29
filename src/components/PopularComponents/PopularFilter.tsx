import Filter from "./FilterComponent"
import "./PopularComponents.css"
import SortComponent from "./SortComponent"

export default function PopularFilter() {
  return (
    <div className='PopularFilter'>
        <Filter title="Sort" child={<SortComponent />}/>
    </div>
  )
}
