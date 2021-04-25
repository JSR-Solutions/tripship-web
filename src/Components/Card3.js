import react from  'react'
import '../Styles/Card3.css'

function Card3(props){
    return (
        <div className = "parent-card3">
        <div className = "cardrt">
        <img src = {props.image}></img>
        <div className = "infou">
        <h1>{props.headi}</h1>
        <p>{props.text}</p>
        <a className = "bytu">Read More</a>
        </div>
        </div>
        </div>
    )
}

export default Card3