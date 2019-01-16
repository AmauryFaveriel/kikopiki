import React, { Component } from 'react';
import data from './data';
import Painting from './Painting'

class Paintings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: "lol",
            error: ''
        }
    }
    componentDidMount = () => {
        // document.onmousemove = () =>{
        //     clearTimeout(timeout);
        //     const timeout = setTimeout(() => {
        //         console.log("move your mouse");
        //     }, 500);
        // }
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
                    author={x.author}
                    desc={x.desc}
                    first_painting={x.first_painting}
                    key={i}
                    index={i}
                    showArticle={(i) => this.props.showArticle(i)}
                />)}
            </section>
        )
    }
}

export default Paintings;