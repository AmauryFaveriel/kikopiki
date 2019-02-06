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
    render = () => {
        return (
            <section className={this.props.isMenuHiddenDOM ? 'Menu Menu--hiddenDOM' : this.props.isMenuHidden ? 'Menu' : 'Menu Menu--hidden'}>
                <div className="Menu__burger" onClick={() => {
                    this.props.hideMenu();
                }}>
                    <div className={!this.props.isMenuHidden ? this.state.style : 'Menu__burger__line Menu__burger__line--1'}></div>
                    <div className={!this.props.isMenuHidden ? this.state.style : 'Menu__burger__line Menu__burger__line--2'}></div>
                    <div className={!this.props.isMenuHidden ? this.state.style : 'Menu__burger__line Menu__burger__line--3'}></div>
                </div>
                <nav className={this.props.isMenuHidden ? 'Menu__nav' : 'Menu__nav hiddenX'}>
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
