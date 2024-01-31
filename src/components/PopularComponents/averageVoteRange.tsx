const VoteRange = () => {
  const bars = "|".repeat(10);

  return (
    <div className="range_for_vote_inner">
      <h4 style={{ marginBottom: "10px" }}>User Score</h4>

      <div className="vote_ragne_container">
        <div className="bars">
          {bars.split("").map((bar, index) => {
            return <p key={index}>{bar} </p>;
          })}
        </div>
        <input type="range" className="vote_range_class" step={0} min={1} max={10}/>
        <div className="vote_numbers">
        <span className="vote_number vote_zero">0</span>
        <span className="vote_number vote_five">5</span>
        <span className="vote_number vote_ten">10</span>
        </div>
      </div>
    </div>
  );
};

export default VoteRange;
