import React, { Component } from 'react';
import LittlePaiting from './LittlePainting/LittlePainting';
import data from '../../../data';

class LittlePaintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LittlePaintingsStyle: 'LittlePaintings',
            LittlePaintingsStyleHidden: 'LittlePaintings hidden',
            buttonStyle: 'LittlePaintings__button',
            buttonStyleHidden: 'LittlePaintings__button hidden',
        }
    }
    
    render = () => {
        return (
                <nav className="Menu__nav">
                    <ul className='LittlePaintings'>
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
                        className='LittlePaintings__button'
                        onClick={this.props.click}
                    >Conclusion</button>
                </nav>
        )
    }
}

export default LittlePaintings;
