import axios from "axios"
import { useInfiniteQuery } from "react-query"

const FilteredQuery = () => {

    const genres = [28,27, 12]
    const {data} = useInfiniteQuery(['filtered-move-db'], ({pageParam = 1}) => { 
        return axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc&with_genres=${genres}` , 
        {
            headers:{
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                Accept: 'application/json'
            }
        })

    },
    {
        getNextPageParam: (_lastPage, pages) => {
            return pages.length + 1
        }
    })

    console.log(data);
    

    return(
        <>
        </>
    )
}

export default FilteredQuery