import "./MovieListLoadingComponent.css";
import loadingCover from "../../assets/images/glyphicons-picture.svg";

export default function MovieListLoadingComponent() {
  const loadingItems = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="MovieListLoadingComponent">
      {loadingItems.map((movie) => (
        <div key={movie} className="loading-placeholder">
          <img
            src={loadingCover}
            alt="loading cover"
            className="movie_list_loading_cover"
          />
        </div>
      ))}
    </div>
  );
}
