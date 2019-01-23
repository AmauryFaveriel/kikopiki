import React, { Component } from 'react';
import logo from '../../assets/imgs/logo.svg'
import LittlePaintings from './LittlePaintings/LittlePaintings';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuHidden: false
        }
    }
    hideMenu = () => this.setState({isMenuHidden: !this.state.isMenuHidden})
    render = () => {
        return (
            <section className={this.props.style}>
                <img src={logo} alt="logo" className="Menu__logo" onClick={this.hideMenu}/>
                <nav className="Menu__nav">
                    <LittlePaintings
                        AppIndex={this.props.AppIndex}
                        visitedPaintings={this.props.visitedPaintings}
                        updateArticle={(i) => this.props.updateArticle(i)}
                        click={this.props.click}
                        isMenuHidden={this.state.isMenuHidden}
                    />
                </nav>
            </section>
        )
    }
}

export default Menu;
