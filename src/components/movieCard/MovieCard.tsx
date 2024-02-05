import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";
import RatingCircle from "./RatingCircle";

import loadingImage from "../../assets/images/glyphicons-picture.webp";

interface movieCardProps {
  image: string;
  rating: number;
  title?: string;
  date?: string;
  movieId?: number;
  popularStyleWidth?: string;
  overview?:string;
  isTvShow?: boolean;
}

const MovieCard: React.FC<movieCardProps> = ({
  image,
  rating,
  title,
  date,
  movieId,
  popularStyleWidth,
  overview,
  isTvShow
}) => {
  return (
    <Link to={isTvShow ? `/pages/SingleTvPage/${movieId}` : `/pages/singleMoviePage/${movieId}`}>
      <div className={`movie_card_container ${popularStyleWidth}`}>
        <div className={`movie_Card ${popularStyleWidth}`}>
          <img
            loading="lazy"
            src={image}
            alt="movie card"
            style={{
              backgroundImage: `url(${loadingImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className={`movie_card_rating ${popularStyleWidth}`}>
            <RatingCircle
              rating={rating}
              width={38}
              height={38}
              CircleHeight={34}
              CircleWidth={34}
            />
          </div>
        </div>

        <div className={`"movie_Card_title_date_outerDesc"  ${popularStyleWidth}`}>
          <p className={`movie_card_title ${popularStyleWidth}`}>{title}</p>
          <p className="movie_card_date">{date}</p>

          <p className={`movie_card_outter_description ${popularStyleWidth}`} >
          {overview}
        </p>
        </div>

      </div>
    </Link>
  );
};

export default MovieCard;
