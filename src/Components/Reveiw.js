import React from "react";
import {Carousel} from "react-bootstrap";
import Person from "../Assets/person.jpg"
import "../Styles/review.css"

function Review(){
    const data=[{imgUrl:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"Peter Jones",review:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
{imgUrl:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",name:"Anna Johnson",review:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."}]

    return(
        <div >
        <h1 style={{fontWeight:"Bolder"}}>Our Reviews</h1>
        <br></br>
        <br></br>

        <Carousel className="h_review">
        {data.map((dat)=>{
        
            return(
        <Carousel.Item>
        <div>
        
        <img className="review_img" src={dat.imgUrl}/>
        <h2>{dat.name}</h2>
        <div className="review_p">
        <p>{dat.review}</p>
        </div>
        
        </div>
        </Carousel.Item>)
    })}
        </Carousel>
        
        </div>

    );
}
export default Review;