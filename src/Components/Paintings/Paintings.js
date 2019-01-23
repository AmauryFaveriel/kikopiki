import React, { Component } from 'react';
import data from '../../data';
import Painting from '../Painting/Painting'
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
        // document.onmousemove = () =>{
        //     clearTimeout(timeout);
        //     const timeout = setTimeout(() => {
        //         console.log("move your mouse");
        //     }, 500);
        // }

        setTimeout(() => {
            setInterval(() => {
                document.querySelector('.Paintings').scrollBy(2, 0)
            }, 16)
        }, 2000)
    }
    
    updateStyle = () => {
        return {
            left: '-200px'
        }
    }
    scrollLeft = () => {
        let scrollLeftID = scrollLeftID = setInterval(() => {
            document.querySelector('.App').scrollBy(-3, 0)
            console.log('mousedown-l');
            if (!this.state.isScrollingLeft) {
                console.log('mouseup-l');
                clearInterval(scrollLeftID);
            }
        }, 8)
            
    }
    scrollRight = () => {
        let scrollRightID = scrollRightID = setInterval(() => {
            document.querySelector('.App').scrollBy(3, 0)
            console.log('mousedown-r');
            if (!this.state.isScrollingRight) {
                console.log('mouseup-r');
                clearInterval(scrollRightID);
            }
        }, 8)
    }
    render = () => {
        return (
            <section className='Paintings' style={{color: this.updateStyle()}}>
                <span 
                    className="arrow arrow--left" 
                    onMouseDown={() => {
                        this.setState({isScrollingLeft: true})
                        this.scrollLeft()
                        
                    }}
                    onMouseUp={() => {
                        this.setState({isScrollingLeft: false})
                        this.scrollLeft()
              
                    }}
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
                    onMouseDown={() => {
                        this.setState({isScrollingRight: true}, this.scrollRight())
                        
                    }}
                    onMouseUp={() => {
                        this.setState({isScrollingRight: false}, this.scrollRight())
              
                    }}
                >&#62;</span>
            </section>
        )
    }
}

export default Paintings;