import React from "react"
import "./movieCard.css"

interface movieCardProps {
    image: string
}

const MovieCard: React.FC<movieCardProps> = ({image}) => {
  return (
    <div className="movie_Card">
        <img src={image} alt="movie card" />

        <div className="movie_card_rating">
          
        </div>
    </div>
  )
}

export default MovieCard
