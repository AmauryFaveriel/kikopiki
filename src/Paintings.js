import React, { Component } from 'react';
import data from './data';
import Painting from './Painting'

class Paintings extends Component {
    render = () => {
        return (
            <section className='Paintings'>
                {data.paintings.map((x, i) => <Painting 
                    author={x.author}
                    desc={x.desc}
                    color={x.color}
                    key={i}
                />)}
            </section>
        )
    }
}

export default Paintings;