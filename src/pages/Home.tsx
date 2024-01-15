import MovieCard from "../components/movieCard/MovieCard"
import testImage from "../assets/images/test.webp"
import TrendingMovies from "../TrendingMovie"

export default function Home() {
  return (
    <div>
      <MovieCard image={testImage} rating={10} title="" date=""/>
      <TrendingMovies />
    </div>
    
  )
}
