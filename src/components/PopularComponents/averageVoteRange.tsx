import { useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRange, setIsFilteringTrue } from "../../store/sortingValues";

interface RootState {
  chooseOption:{
    voteRange:  number;
  }
}

const VoteRange = () => {
  const bars = "|".repeat(10);

  const voteRangeValue = useSelector(
    (state: RootState) => state.chooseOption.voteRange
  );
  const dispatch = useDispatch();

  const handleVoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRange(Number(event.target.value)));
    dispatch(setIsFilteringTrue())
  };

  useEffect(() => {
    console.log(voteRangeValue);
  }, [voteRangeValue]);

  return (
    <div className="range_for_vote_inner">
      <h4 style={{ marginBottom: "10px" }}>User Score</h4>

      <div className="vote_ragne_container">
        <div className="bars">
          {bars.split("").map((bar, index) => {
            return <p key={index}>{bar} </p>;
          })}
        </div>
        <input
          type="range"
          className="vote_range_class"
          value={voteRangeValue}
          onChange={handleVoteChange}
          step={1}
          min={1}
          max={10}
        />
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
