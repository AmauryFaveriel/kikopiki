import React, { Component } from 'react';
import get from 'lodash/get';

import { paintings } from '../../data';
import Painting from './Painting/Painting';
import Arrow from './Arrow/Arrow';

class Paintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollingLeft: false,
            isScrollingRight: false,
            index: 0
        };
        this.paintingsRefs = paintings.map(() => React.createRef());
    }

    
    scroll = () => {
        const nextPaintingRef = get(this.paintingsRefs, this.state.index);
        const goScroll = nextPaintingRef ? nextPaintingRef.current : null;
        if (goScroll) goScroll.scrollIntoView({behavior: 'smooth', inline: 'start'});
    }

    scrollLeft = () => this.state.index > 0 ? this.setState({index: this.state.index - 1}, this.scroll) : null;
    scrollRight = () => this.state.index < paintings.length - 2 ? this.setState({ index: this.state.index + 1 }, this.scroll) : null;

    render() {
        return <section className='Paintings'>
            <Arrow
                isLeft={true}
                goScroll={this.scrollLeft}
                bool={this.props.bool}
            />
            {paintings.map((x, i) => <div key={i} ref={this.paintingsRefs[i]}>
                <Painting
                    last={i === paintings.length - 1 ? 'Painting__last' : ''}
                    x={x}
                    index={i}
                    showHover={this.props.hideIntro}
                    showArticle={i => this.props.showArticle(i)}
                    visitedPaintings={this.props.visitedPaintings}
                />
            </div>)}
            <Arrow
                isLeft={false}
                goScroll={this.scrollRight}
                bool={this.props.bool}
            />
        </section>
    }
}

export default Paintings;
