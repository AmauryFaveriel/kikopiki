import React, { Component } from "react";
import LittlePaintings from "./LittlePaintings/LittlePaintings";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuHidden: false,
            style: 'Menu__burger__line'
        }
    }
    hideMenu = () => this.setState({isMenuHidden: !this.state.isMenuHidden})
    render = () => {
        return (
            <section className={this.props.style}>
                <div className="Menu__burger" onClick={() => {
                    this.hideMenu();
                }}>
                    <div className={this.state.isMenuHidden ? this.state.style : 'Menu__burger__line Menu__burger__line--1'}></div>
                    <div className={this.state.isMenuHidden ? this.state.style : 'Menu__burger__line Menu__burger__line--2'}></div>
                    <div className={this.state.isMenuHidden ? this.state.style : 'Menu__burger__line Menu__burger__line--3'}></div>
                </div>
                <nav className={!this.state.isMenuHidden ? 'Menu__nav' : 'Menu__nav hiddenX'}>
                    <LittlePaintings
                        AppIndex={this.props.AppIndex}
                        visitedPaintings={this.props.visitedPaintings}
                        updateArticle={(i) => this.props.updateArticle(i)}
                        click={this.props.click}
                    />
                </nav>
            </section>
        )
    }
}

export default Menu;
