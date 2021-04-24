import react from 'react'
import "../Styles/Card2.css"

function Card2(props){
    return (
        <div>
        <div className="container1">
        <div className = "cardui">
        <div className = "imgBx">
        <img src = {props.image}></img>
        
        </div>
        <div className = "content">
        <h2>{props.headi}</h2>
        <p>{props.text}</p>

        </div>
        
        </div>
  
</div>

</div>

    )

}
export default Card2