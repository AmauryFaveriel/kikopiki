import React, { Component } from 'react';
import data from '../../data';
import Painting from './Painting/Painting'
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
    scrollLeft = () => {
        const scrollLeftID = setInterval(() => this.state.isScrollingLeft ? document.querySelector('.App').scrollBy(-2, 0) : clearInterval(scrollLeftID), 8) 
    }
    scrollRight = () => {
        const scrollRightID = setInterval(() => this.state.isScrollingRight ? document.querySelector('.App').scrollBy(2, 0) : clearInterval(scrollRightID), 8)
    }
    render = () => {
        return (
            <section className='Paintings' style={{color: this.updateStyle()}}>
                <span 
                    className="arrow arrow--left" 
                    onMouseDown={() => this.setState({isScrollingLeft: true}, this.scrollLeft())}
                    onMouseUp={() => this.setState({isScrollingLeft: false}, this.scrollLeft())}
                    >&#60;</span>
                {/* <HorizontalScroll 
                    pageLock={true}
                    reverseScroll={true}
                    style={this.state.HorizontalScrollStyle}
                > */}
                    {data.paintings.map((x, i) => <Painting 
                        author={x.inspired_painting.author}
                        desc={x.inspired_painting.desc}
                        main_painting={x.inspired_painting.visual}
                        key={i}
                        index={i}
                        showArticle={(i) => this.props.showArticle(i)}
                        checkedPaintings={this.props.checkedPaintings}
                    />)}
                {/* </HorizontalScroll> */}
                <span 
                    className="arrow arrow--right" 
                    onMouseDown={() => this.setState({isScrollingRight: true}, this.scrollRight())}
                    onMouseUp={() => this.setState({isScrollingRight: false}, this.scrollRight())}
                >&#62;</span>
            </section>
        )
    }
}

export default Paintings;