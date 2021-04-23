import React from "react";
import "../Styles/Card.css";
import {MdLocalAirport, GiForkKnifeSpoon, FaBinoculars, IoBed} from "react-icons/all"
import background from "../Assets/manali.jpg";
import {useState, useEffect} from "react"

function Card(props) {
  const [colfood, setcolfood] = useState("black");
  const [colsight, setcolsight] = useState("black");
  const [colstay, setcolstay] = useState("black");
  const [coltrav, setcoltrav] = useState("black");
  
  
     useEffect(() => {
      if (props.food == 1){
        console.log("mujhe bulaya")
        setcolfood("orange")
      }
      if (props.sight == 1){
        setcolsight("orange")
      }
      if (props.stay == 1){
       setcolstay("orange")
     }
     if (props.travel == 1){
       setcoltrav("orange")
     }

     },[])
    
  return (
    <div className="parent-card">
      <div className="cardi">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="card-text">
          <span className="date">{props.date} days ago</span>
          <h2>{props.headi}</h2>
          <p>
            {props.text}
          </p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="value">
                  <GiForkKnifeSpoon  color = {colfood}/>
            </div>
            <div className="type">food</div>
          </div>

          <div className="stat midi">
            <div className="value">< MdLocalAirport color = {coltrav}/></div>
            <div className="type">travel</div>
          </div>
          <div className="stat midi">
            <div className="value"><FaBinoculars color = {colsight} /></div>
            <div className="type">sight.</div>
          </div>

          <div className="stat">
            <div className="value"><IoBed color = {colstay}/></div>
            <div className="type">stay</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
