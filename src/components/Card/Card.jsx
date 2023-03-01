import React from "react";
import "./style.css";
class Card extends React.Component {

    render (){
        const {imgSrc , title , body} = this.props;
        return (
        <>
        <div className="cardWrapper">
            <img className="cardImg" src={imgSrc} alt={title}/>
            <h1 className="cardTitle">{title}</h1>
            <p className="cardBody">{body}</p>
        </div>
        </>
        )
    }
}


export default Card ;