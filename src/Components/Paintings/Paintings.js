import React, { Component } from 'react';
import get from 'lodash/get';

import data from '../../data';
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
        this.paintingsRefs = data.paintings.map(() => React.createRef());
    }

    
    scroll = () => {
        const nextPaintingRef = get(this.paintingsRefs, this.state.index);
        const goScroll = nextPaintingRef ? nextPaintingRef.current : null;
        if (goScroll) goScroll.scrollIntoView({behavior: 'smooth', inline: 'start'});
    }

    scrollLeft = () => {
        if (this.state.index > 0) this.setState({index: this.state.index - 1}, () => this.scroll());
    }
    scrollRight = () => {
        if (this.state.index < data.paintings.length - 2) this.setState({ index: this.state.index + 1 }, () => this.scroll());
    }

    render() {
        return <section className='Paintings'>
            <Arrow
                isLeft={true}
                goScroll={this.scrollLeft}
                bool={this.props.bool}
            />
            {data.paintings.map((x, i) => <div key={i} ref={this.paintingsRefs[i]}>
                <Painting
                    last={i === data.paintings.length - 1 ? 'Painting__last' : ''}
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
