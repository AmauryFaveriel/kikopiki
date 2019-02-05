import React, { Component } from "react";
import data from "../../../data";

import checked2 from "../../../assets/imgs/checked_2.svg";

class Painting extends Component {
    render() {
        return (
            <article
                className="Painting"
            >
                <img
                    src={this.props.x.inspired_painting.visual}
                    alt={this.props.x.author}
                />
                <div>
                    <h2>{this.props.x.title}</h2>
                    <h3>{this.props.x.inspired_painting.author}</h3>
                    <p>{this.props.x.inspired_painting.desc}</p>
                    <button 
                        onClick={() => this.props.showArticle(this.props.index)}
                    >{data.cta}
                    {this.props.visitedPaintings.includes(this.props.index) ? <img
                        className="visitedIcon"
                        alt="checked icon"
                        src={checked2}/> : null
                    }</button>
                    
                </div>
            </article>
        );
    }
}

export default Painting;
