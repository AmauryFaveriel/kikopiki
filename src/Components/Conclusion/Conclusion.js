import React, { Component } from "react";
import YouTube from 'react-youtube';
import data from "../../data";
import cross from '../../assets/imgs/cross.svg'

class Conclusion extends Component {
    _onReady = (e) => e.target.pauseVideo();
    render = () => {
        const opts = {height: '300', width: '600'};
        return (
            <section className={this.props.bool ? 'Conclusion Conclusion--hidden' : 'Conclusion'}>
                <button 
                    className="Conclusion__close" 
                    onClick={this.props.hideConclusion}
                >
                    <img alt="cross" src={cross}/>
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
                            <YouTube
                                videoId="xgnxnmqnR7Y"
                                opts={opts}
                                onReady={this._onReady}
                            />
                            <p>{data.conclusion.content[0].content}</p>
                        </section>
                    </div>
                </div>
            </section>
        );
    };
}

export default Conclusion;
