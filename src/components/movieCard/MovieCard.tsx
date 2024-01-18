import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";
import RatingCircle from "./RatingCircle";

interface movieCardProps {
  image: string;
  rating: number;
  title: string;
  date: string;
  movieId:number;
}

const MovieCard: React.FC<movieCardProps> = ({
  image,
  rating,
  title,
  date,
  movieId
}) => {

  return (
    <Link to={`/pages/singleMoviePage/${movieId}`}>
    <div className="movie_card_container">
      <div className="movie_Card">
        <img loading="lazy" src={image} alt="movie card" />
          <div className="movie_card_rating">
            <RatingCircle rating={rating} width={38} height={38} CircleHeight={34} CircleWidth={34} />
          </div>
      </div>

      <p className="movie_card_title">{title}</p>
      <p className="movie_card_date">{date}</p>
    </div>
    </Link>
  );
};

export default MovieCard;
