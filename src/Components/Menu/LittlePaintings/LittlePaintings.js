import React, { Component } from "react";
import LittlePaiting from "./LittlePainting/LittlePainting";
import data from "../../../data";

class LittlePaintings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LittlePaintingsStyle: "LittlePaintings",
      LittlePaintingsStyleHidden: "LittlePaintings hidden",
      buttonStyle: "LittlePaintings__button",
      buttonStyleHidden: "LittlePaintings__button hidden"
    };
  }
  onmousedown = () => {
    console.log('wow');
}
onmouseup = () => {
    console.log('owo');
}
  render = () => {
    return (
      <nav className="Menu__nav">
        <ul className="LittlePaintings">
          {data.paintings.map((x, i) => (
            <LittlePaiting
              isSameIndex={this.props.AppIndex === i}
              key={i}
              i={i}
              painting={x.inspired_painting.visual}
              title={x.title}
              updateArticle={() => this.props.updateArticle(i)}
              visitedPaintings={this.props.visitedPaintings}
            />
          ))}
        </ul>
        <button 
            className={this.props.visitedPaintings.length === data.paintings.length ? "LittlePaintings__button" : "LittlePaintings__button LittlePaintings__button--disable"} 
            onClick={this.props.click}
            onMouseDown={this.onmousedown}
            onMouseUp={this.onmouseup}
        >
          Aller plus<br></br> loin
          <div className={this.state.isNoConclusionHidden ? "noConclusion noConclusion--hidden" : "noConclusion"}>Vous ne pourrez accédez au contenu bonus qu’en consultant les 5 tableaux</div>
        </button>
        
      </nav>
    );
  };
}

export default LittlePaintings;
