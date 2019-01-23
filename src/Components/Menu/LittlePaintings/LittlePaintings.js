import React, { Component } from 'react';
import LittlePaiting from './LittlePainting/LittlePainting';
import data from '../../../data';

class LittlePaintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LittlePaintingsStyle: 'LittlePaintings',
            LittlePaintingsStyleHidden: 'LittlePaintings hidden',
            buttonStyle: 'Menu__nav__conclusion',
            buttonStyleHidden: 'Menu__nav__conclusion hidden',
        }
    }
    
    render = () => {
        return (
                <nav className="Menu__nav">
                    <ul className={this.props.isMenuHidden ? this.state.LittlePaintingsStyleHidden : this.state.LittlePaintingsStyle}>
                    {data.paintings.map((x, i) =>
                        <LittlePaiting
                            isSameIndex={this.props.AppIndex === i}
                            key={i}
                            i={i}
                            painting={x.main_painting.visual}
                            title={x.title}
                            updateArticle={() => this.props.updateArticle(i)}
                            visitedPaintings={this.props.visitedPaintings}

                        />
                    )}
                    </ul>
                    <button 
                        className={this.props.isMenuHidden ? this.state.buttonStyleHidden : this.state.buttonStyle}
                        onClick={this.props.click}
                    >GO TO CONCLUSION</button>
                </nav>
        )
    }
}

export default LittlePaintings;
