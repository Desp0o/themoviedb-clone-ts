import { useEffect } from "react";
import rangeBar from "../../assets/icons/rangeBar.gif"

const VoteRange = () => {
    const bars = ['|', '|', '|', '|', '|', '|', '|', '|', '|', '|',];
    

    return(
        <div className="range_for_vote_inner">
            <h4 style={{marginBottom:"10px"}}>User Score</h4>

            <div className="vote_ragne_container">
                <div className="bars">{bars && bars.map((bar) => {return <p>{bar} </p>} )}</div>
            <input type="range" className="vote_range_class"/>
            </div>
           
        </div>
    )
}

export default VoteRange