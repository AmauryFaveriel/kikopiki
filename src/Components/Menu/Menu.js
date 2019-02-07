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
        const lines = [];
        for (let i = 0; i < 3; i++) {
            lines.push(<div key={i} className={!this.props.isMenuHidden ? this.state.style : `${this.state.style} ${this.state.style}--${i + 1}`}></div>)
        }
        return (
            <section className={this.props.isMenuHiddenDOM ? 'Menu Menu--hiddenDOM' : this.props.isMenuHidden ? 'Menu' : 'Menu Menu--hidden'}>
                <div className="Menu__burger" onClick={this.props.toggle}>
                    {lines.map((x) => x)}
                </div>
                <nav className={this.props.isMenuHidden ? 'Menu__nav' : 'Menu__nav hiddenX'}>
                    <LittlePaintings
                        AppIndex={this.props.AppIndex}
                        visitedPaintings={this.props.visitedPaintings}
                        updateArticle={(i) => this.props.updateArticle(i)}
                        click={this.props.click}
                        bool={this.props.bool}
                    />
                </nav>
            </section>
        )
    }
}

export default Menu;
