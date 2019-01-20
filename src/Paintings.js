import React, { Component } from 'react';
import data from './data';
import Painting from './Painting'

class Paintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: "lol",
            error: '',
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
                {data.paintings.map((x, i) => <Painting 
                    author={x.title}
                    desc={x.intro}
                    main_painting={x.main_painting.visual}
                    key={i}
                    index={i}
                    showArticle={(i) => this.props.showArticle(i)}
                    checkedPaintings={this.props.checkedPaintings}
                />)}
            </section>
        )
    }
}

export default Paintings;