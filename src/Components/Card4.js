import React from "react"
import "../Styles/card4.css"

function Card4(props){
    return(
        <div className="h_Card">
        <div className="h_container">
        <img src={props.img}/>
        </div>
        <div className="h_details">
        <h2>{props.name}</h2>
        <p>{props.detail}</p>
        </div>
        </div>

    );
}
export default Card4;