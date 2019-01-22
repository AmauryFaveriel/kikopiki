import React, { Component } from 'react';
import logo from '../../assets/imgs/logo.svg'
import data from '../../data';

class Header extends Component {
    render = () => {
        return (
            <header className="Header">
                <img src={logo} alt={data.title} onClick={this.props.hideArticle}/>
            </header>
        )
    }
}

export default Header;