import React, { useEffect, useState } from "react";

const genresArr = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const FilterComponentChild = () => {
  const [state, setState] = useState<HTMLDivElement | string>("");
  const [selectedGenreIndex, setSelectedGenreIndex] = useState<null | number>(null);

  const saveState = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setState(e.currentTarget.textContent || "");

    setSelectedGenreIndex(index);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="filter_elements">
      <div className="filter_elements_inner">
        <h4 style={{ marginBottom: "10px" }}>Genres</h4>
        <div className="filter_with_genres">
          {genresArr.map((genre, index) => {
            return (
              <div
                key={index}
                className={`genres_item ${
                  selectedGenreIndex === index ? "selected" : ""
                }`}
                onClick={(e) => saveState(e, index)}>{genre}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterComponentChild;
