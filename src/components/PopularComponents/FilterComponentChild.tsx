import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGenre, setGenre } from "../../store/sortingValues";
import VoteRange from "./averageVoteRange";

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
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const dispatch = useDispatch();

  const toggleGenre = (genreID: number) => {
    const index = selectedGenres.indexOf(genreID);
    if (index === -1) {
      // Genre not selected, add it
      setSelectedGenres([...selectedGenres, genreID]);
      dispatch(setGenre(genreID));
    } else {
      // Genre already selected, remove it
      dispatch(removeGenre(genreID));
      const updatedGenres = [...selectedGenres];
      updatedGenres.splice(index, 1);
      setSelectedGenres(updatedGenres);
    }
  };

  return (
    <div className="filter_elements">
      <div className="filter_elements_inner">
        <div>
          <h4 style={{ marginBottom: "10px" }}>Genres</h4>
          <div className="filter_with_genres">
            {genresArr.map((genre, index) => {
              const isSelected = selectedGenres.includes(genre.id);

              return (
                <div
                  key={index}
                  className={`genres_item ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleGenre(genre.id)}
                >
                  {genre.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="range_for_vote">
          <VoteRange />
        </div>
      </div>
    </div>
  );
};

export default FilterComponentChild;
