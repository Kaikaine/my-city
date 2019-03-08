import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArr } from "../../utils/misc";
import MatchesBlock from "./../../utils/matches_block";

export default class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({ matches: reverseArr(matches) });
        console.log(this.state.matches);
      })
      .catch(err => console.log(err));
  }

  showMatches = matches =>
    matches ? (
      matches.map(match => (
        <div key={match.id} className="item">
          <div className="wrapper">
            <MatchesBlock match={match} />
          </div>
        </div>
      ))
    ) : (
      <div>No Matches</div>
    );

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
