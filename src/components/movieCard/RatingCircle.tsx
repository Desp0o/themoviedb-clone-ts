import "./movieCard.css"
import React, { useEffect, useState } from "react";

interface ratingCircleProps {
    rating: number;
    width: number;
    height: number;
    CircleWidth: number;
    CircleHeight: number;
}
const RatingCircle: React.FC<ratingCircleProps> = ({rating, width, height, CircleWidth, CircleHeight}) => {

    const dasharray = Math.PI * 100;
  const dashOffset = Math.PI * (100 - rating);

  const [ratingColor, setRatingColor] = useState<string>("");

  useEffect(() => {
    if (rating >= 70) {
      setRatingColor("#5FCF7A");
    } else if (rating <= 69 && rating >= 50) {
      setRatingColor("#D2D643");
    } else if (rating <= 49 && rating >= 1) {
      setRatingColor("#DC3861");
    } else if (rating === 0) {
      setRatingColor("#666666");
    }
  }, [rating]);

  return (
    <div className="circle_rating" style={{width: width, height: height}}>
          <svg
            width={CircleWidth}
            height={CircleHeight}
            viewBox="0 0 100 100"
            className="rating_svg"
          >
            <circle
              cx={52.5}
              cy={52.5}
              r={50}
              fill="transparent"
              stroke={ratingColor}
              strokeWidth={6}
              className="full_circle_rating"
              strokeDasharray={dasharray}
            />

            <circle
              cx={52.5}
              cy={52.5}
              r={50}
              fill="transparent"
              stroke={ratingColor}
              strokeWidth={6}
              className="full_circle_rating_front"
              strokeDasharray={dasharray}
              strokeDashoffset={dashOffset}
            />
          </svg>

          <p className="movie_card_rating_txt">{rating}</p>
        </div>
  )
}


export default RatingCircle