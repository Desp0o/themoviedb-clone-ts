import React from "react";
import "../../pages/singleMoviePage/SingleMoviePage.css";
interface Genre {
  name: string;
  id: number
}

interface props {
  title: string;
  date?: string;
  genre?: Genre[];
}

const SingleMovieTitle: React.FC<props> = ({ title, date, genre = [] }) => {
  console.log();

  return (
    <>
      <div className="Single_Movie_Title_date">
        <p className="Single_Movie_Title">{title}</p>
        <p className="Single_Movie_release_date">({date?.substring(0, 4)})</p>
      </div>

      <div className="date_genre_runtime">
        <p>{date}</p>
        <span>•</span>
        {genre?.map((item) => {
          return <p key={item.id}>{item.name},</p>;
        })}
        <span>•</span>
        <p></p>
      </div>
    </>
  );
};

export default SingleMovieTitle;
