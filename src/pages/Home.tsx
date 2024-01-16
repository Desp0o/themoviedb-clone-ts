
import FirsSection from "../components/firstSection/FirsSection"
import PopularTvShows from "../components/popularTVshows/PopularTvShows"
import TrendingMovies from "../components/trendingMovies/TrendingMovie"
import Wrap2023 from "../components/wrap2023/Wrap2023"

export default function Home() {
  return (
    <div>
      <FirsSection />
      <TrendingMovies />
      <Wrap2023 />
      <PopularTvShows />
    </div>
    
  )
}
