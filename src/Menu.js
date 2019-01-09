import React, { Component } from 'react';
import data from './data';

class Menu extends Component {
    render = () => {
        return (
            <section className="Menu">
                <img src="" alt="" className="Menu__logo"/>
                <nav className="Menu__nav">
                    <button className="Menu__nav__toggleSound"></button>
                    <ul className="Menu__nav__paintings"> 
                    {data.paintings.map((x, i) => 
                        <li className="Menu__nav__painting" key={i}>
                            <img src={x.first_painting} alt={x.title}/>
                        </li>
                    )}
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Menu;