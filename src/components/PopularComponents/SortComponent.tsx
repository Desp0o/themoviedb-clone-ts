const SortComponent: React.FC = () => {
  return (
    <div className="sort_child">
      <p>Sort Results By </p>

      <select className="sorting_options">
        <option value="popularityDescending">Popularity Descending</option>
        <option value="popularityAscending">Popularity Ascending</option>
        <option value="ratingDescending">Rating Descending</option>
        <option value="ratingAscending">Rating Ascending</option>
      </select>
    </div>
  );
};

export default SortComponent;
