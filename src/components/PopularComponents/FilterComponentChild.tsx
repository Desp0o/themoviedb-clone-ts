import { useState } from "react";
import { useDispatch } from "react-redux";
import { setGenre } from "../../store/sortingValues";

const genresArr = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];


const FilterComponentChild = () => {
  const [selectedGenreIndex, setSelectedGenreIndex] = useState<null | number>(
    null
  );

  const dispatch = useDispatch();

  const saveState = (index: number, genreID: number) => {
    setSelectedGenreIndex(index);
    dispatch(setGenre(genreID));
  };

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
                onClick={() => saveState(index, genre.id)}
              >
                {genre.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterComponentChild;
