import React, {useState}  from "react";
import Game from "./game";
import "./dice.css";
function dice() {
  let c1 = 0,
    c2 = 0;
  let v1 = 0,
    v2 = 0;
  const [curr1, Setcurr1]= useState(0);
  const [curr2, Setcurr2] = useState(0);
  const [value1, SetValue1] = useState(0);
  const [value2, SetValue2] = useState(0);
  const [Dice, Set_Dice] = useState(1);
  const [first, SetFirst] = useState(0);
  const [active, SetActive] = useState(true);
  const className1 = `box-0 ${active ? "active" : ""}`;
  const className2 = `box-1 ${active ? "" : "active"}`;
  const RollDice = (e) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    Set_Dice(dice);
    console.log("dice" + dice);
    console.log("first:" + first);
    if (first === 6 && dice === 6) {
      console.log("all values");
      if (active) {
        SetValue1(0);
        Setcurr1(0);
        SetActive(false);
      } else {
        SetValue2(0);
        Setcurr2(0);
        SetActive(true);
      }
    } else if (dice === 1) {
      Setcurr1(0);
      console.log("curr1 value in 1:" + curr1);
      Setcurr2(0);
      // Hold();
      if (active) SetActive(false);
      else SetActive(true);
    } else if (active) {
      c1 = curr1 + dice;
      Setcurr1(c1);
    } else if (!active) {
      c2 = curr2 + dice;
      Setcurr2(c2);
    }
    SetFirst(dice);
  };
  const Hold = () => {
    if (active) {
      console.log("curr1 value:" + curr1);
      v1 = curr1 + value1;
      SetValue1(v1);
      Setcurr1(0);
      SetActive(false);
    } else {
      console.log("curr2 value:" + curr2);
      v2 = curr2 + value2;
      SetValue2(v2);
      Setcurr2(0);
      SetActive(true);
    }
  };
  const New_game = () => {
    SetValue1(0);
    SetValue2(0);
    Setcurr2(0);
    Setcurr1(0);
    SetActive(true);
    Set_Dice(1);
  };
  return (
    <div>
      <div className="mainArea">
        <div className={className1}>
          <p className="player player-0 ">Player 1</p>
          <p className="point" id="score-0">
            {value1}
          </p>
          <div className="current">
            <p>current</p>
            <p className="hold_point" id="current-0">
              {curr1}
            </p>
          </div>
        </div>
        <div className={className2}>
          <p className="player player-1"> Player 2</p>
          <p className="point" id="score-1">
            {value2}
          </p>
          <div className=" current">
            <p>current</p>
            <p className="hold_point" id="current-1">
              {curr2}
            </p>
          </div>
        </div>
        <button className="tap1 " onClick={New_game}>
          {" "}
          New Game
        </button>
        <Game number={Dice}></Game>
        <button className="tap2 " onClick={RollDice}>
          Roll Dice
        </button>
        <button className="tap3 " onClick={Hold}>
          Hold
        </button>
      </div>
    </div>
  );
}

export default dice;
