import React, { useEffect, useState } from "react";

const genresArr = ["Action", "Adventure", "Animation"];

const FilterComponentChild = () => {
  const [state, setState] = useState<HTMLDivElement | string>("");

  const saveState = (e: React.MouseEvent<HTMLDivElement>) => {
    setState(e.currentTarget.textContent || "");
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="filter_elements">
      <div className="filter_elements_inner">
        <div className="filter_with_genres">
          {genresArr.map((genre) => {
            return (
              <div
                key={genre}
                className="genres_item"
                onClick={(e) => saveState(e)}
              >
                {genre}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterComponentChild;
