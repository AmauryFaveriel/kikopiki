import React, { Component } from "react";
import data from "../../data";
import cross from '../../assets/imgs/cross.svg'

class Conclusion extends Component {
  render = () => {
    return (
        <section className={this.props.style}>
            <button className="Conclusion__close" onClick={this.props.hideConclusion}>
                <img alt="cross" src={cross} />
            </button>
            <h2>{data.conclusion.title}</h2>
            <div className="Conclusion__content">
                <div>
                    <h3>{data.conclusion.content[0].title}</h3>
                    <section>
                        <div><img src={data.conclusion.content[0].visual} alt=""/></div>
                        <p>{data.conclusion.content[0].content}</p>
                    </section>
                </div>
                <div>
                    <h3>{data.conclusion.content[0].title}</h3>
                    <section>
                        <video src=""></video>
                        <p>{data.conclusion.content[0].content}</p>
                    </section>
                </div>
            </div>
        </section>
    );
  };
}

export default Conclusion;
