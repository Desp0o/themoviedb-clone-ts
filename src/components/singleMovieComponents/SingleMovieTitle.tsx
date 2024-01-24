import React from "react";
import "./singleMovComp.css"

interface Genre {
  name: string;
  id: number
}

interface producCountry {
  iso_3166_1: string
}

interface props {
  title: string;
  date?: string;
  genre?: Genre[];
  country?: producCountry[];
  runtime: number;
}

const SingleMovieTitle: React.FC<props> = ({ title, date, genre = [], country = [], runtime }) => {

  const convertedDate = date?.split('-').reverse().join('/')
  
  let duration: number;
  let hours: number;
  let minutes: number;

  if(runtime){
     duration = runtime / 60
     hours = Math.floor(duration)
     minutes = Math.round((duration - hours) * 60)
  }
  

  return (
    <div className="single_movie_info">
      <div className="Single_Movie_Title_date">
        <p className="Single_Movie_Title">{title}</p>
        <p className="Single_Movie_release_date">({date?.substring(0, 4)})</p>
      </div>

      <div className="date_genre_runtime">
        <p>{convertedDate} ({country[0].iso_3166_1})</p>
        <p>•</p>
        {genre?.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
        <p>•</p>
        <p>{hours!}h {minutes!}m</p>
      </div>
    </div>
  );
};

export default SingleMovieTitle;
