import "./wrap2023.css";
import arrow from "../../assets/images/arrow.svg"

export default function Wrap2023() {
  return (
    <div className="Wrap2023">
      <div className="overlay" />
      <h2 className="wrap-title">That's a Wrap 2023</h2>
      <p>The best (and worst) of the year from TMDB.</p>

      <div className="wrap-btn">
        <h4>Check It Out</h4>
        <img src={arrow} alt="glyph arrow" className="wrap-btn-arrow" />
      </div>
    </div>
  );
}
