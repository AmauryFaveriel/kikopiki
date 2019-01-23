import React, { Component } from 'react';
import data from '../../data';
import Painting from './Painting/Painting'
import Arrow from './Arrow/Arrow'
import HorizontalScroll from 'react-scroll-horizontal'

class Paintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: "lol",
            error: '',
            HorizontalScrollStyle: {
                height: 'auto', 
                width: 'auto', 
                overflow: 'scroll', 
                position: 'initial'
            },
            isScrollingLeft: false,
            isScrollingRight: false
        }
    }
    componentDidMount = () => {
        

        // setTimeout(() => {
        //     let isMouseMoving = false;
        //     if (!isMouseMoving) {
        //         var autoScroll = setInterval(() => {
        //             document.querySelector('.App').scrollBy(2, 0);
                    
        //         }, 16)
        //         document.onmousemove = () => {
        //             isMouseMoving = true;
        //             clearInterval(autoScroll)
        //             clearTimeout(timeout);
        //             timeout = setTimeout(() => setInterval(() => {
        //                 document.querySelector('.App').scrollBy(2, 0);
                        
        //             }, 16), 3000)
        //         }
        //     }
        // }, 5000)
        // var timeout;

    }
    
    updateStyle = () => {
        return {
            left: '-200px'
        }
    }
    scrollLeft = (bool) => this.setState({isScrollingLeft: bool}, () => {const scrollLeftID = setInterval(() => this.state.isScrollingLeft ? document.querySelector('.App').scrollBy(-2, 0) : clearInterval(scrollLeftID), 8)});
    scrollRight = (bool) => this.setState({isScrollingRight: bool },() => {const scrollRightID = setInterval(() => this.state.isScrollingRight ? document.querySelector('.App').scrollBy(2, 0) : clearInterval(scrollRightID), 8)});
    render = () => {
        return (
            <section className='Paintings' style={{color: this.updateStyle()}}>
                <Arrow
                    isLeft={true}
                    mousedown={() => this.scrollLeft(true)}
                    mouseup={() => this.scrollLeft(false)}
                />
                {/* <HorizontalScroll 
                    pageLock={true}
                    reverseScroll={true}
                    style={this.state.HorizontalScrollStyle}
                > */}
                    {data.paintings.map((x, i) => <Painting 
                        x={x}
                        key={i}
                        index={i}
                        showArticle={(i) => this.props.showArticle(i)}
                        visitedPaintings={this.props.visitedPaintings}
                    />)}
                {/* </HorizontalScroll> */}
                <Arrow
                    isLeft={false}
                    mousedown={() => this.scrollRight(true)}
                    mouseup={() => this.scrollRight(false)}
                />
            </section>
        )
    }
}

export default Paintings;