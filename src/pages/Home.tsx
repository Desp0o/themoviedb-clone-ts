import MovieCard from "../components/movieCard/MovieCard"
import testImage from "../assets/images/test.webp"

export default function Home() {
  return (
    <div>
      <MovieCard image={testImage} rating={10} />
    </div>
    
  )
}
