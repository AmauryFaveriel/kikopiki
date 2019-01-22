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
            }
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
    render = () => {
        return (
            <section className='Paintings' style={{color: this.updateStyle()}}>
                <HorizontalScroll 
                    pageLock={true}
                    reverseScroll={true}
                    style={this.state.HorizontalScrollStyle}
                >
                    {data.paintings.map((x, i) => <Painting 
                        author={x.inspired_painting.author}
                        desc={x.inspired_painting.desc}
                        main_painting={x.inspired_painting.visual}
                        key={i}
                        index={i}
                        showArticle={(i) => this.props.showArticle(i)}
                        checkedPaintings={this.props.checkedPaintings}
                    />)}
                </HorizontalScroll>
            </section>
        )
    }
}

export default Paintings;