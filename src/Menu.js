import React, { Component } from 'react';
import LittlePaiting from './LittlePainting';
import data from './data';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuHidden: false,
            navPaintingsStyle: 'Menu__nav__paintings',
            navPaintingsStyleHidden: 'Menu__nav__paintings Menu__nav__paintings--hidden'
        }
    }
    hideMenu = () => this.setState({isMenuHidden: this.state.isMenuHidden ? false : true})
    render = () => {
        return (
            <section className={this.props.style}>
                <img src="https://via.placeholder.com/150.jpg" alt="" className="Menu__logo" onClick={this.hideMenu}/>
                <nav className="Menu__nav">
                    <button className="Menu__nav__toggleSound"></button>
                    <ul className={this.state.isMenuHidden ? this.state.navPaintingsStyleHidden : this.state.navPaintingsStyle}> 
                    {data.paintings.map((x, i) => 
                        <LittlePaiting
                            style={this.props.theIndex === i ? 'Menu__nav__painting hidden' : 'Menu__nav__painting'}
                            key={i}
                            index={i}
                            painting={x.first_painting}
                            title={x.title}
                            updateArticle={() => this.props.updateArticle(i)}

                        />
                    )}
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Menu;