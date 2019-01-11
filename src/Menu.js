import React, { Component } from 'react';
import LittlePaiting from './LittlePainting';
import logo from './assets/imgs/logo.svg'
import data from './data';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuHidden: false,
            navPaintingsStyle: 'Menu__nav__paintings',
            navPaintingsStyleHidden: 'Menu__nav__paintings Menu__nav__paintings--hidden',
            navToggleSoundStyle: 'Menu__nav__toggleSound',
            navToggleSoundStyleHidden: 'Menu__nav__toggleSound hidden',
        }
    }
    hideMenu = () => this.setState({isMenuHidden: this.state.isMenuHidden ? false : true})
    render = () => {
        return (
            <section className={this.props.style}>
                <img src={logo} alt="" className="Menu__logo" onClick={this.hideMenu}/>
                <nav className="Menu__nav">
                    <button className={!this.state.isMenuHidden ? this.state.navToggleSoundStyle : this.state.navToggleSoundStyleHidden}>
                        <i className="fas fa-volume-up"></i>
                        <i className="fas fa-volume-mute"></i>
                    </button>
                    <ul className={this.state.isMenuHidden ? this.state.navPaintingsStyleHidden : this.state.navPaintingsStyle}> 
                    {data.paintings.map((x, i) => 
                        <LittlePaiting
                            style={this.props.theIndex === i ? 'Menu__nav__painting hidden' : 'Menu__nav__painting'}
                            key={i}
                            index={i}
                            painting={x.main_painting}
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