import React, { Component } from 'react';

import Article from './Article';
import Header from './Header.js';
import Intro from './Intro'
import Paintings from './Paintings';
import Menu from './Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                border: '10px red solid',
            },
            appHidden: false,
            appStyle: 'App',
            appStyleHidden: 'App App--overflow',
            introHidden: false,
            introStyle: 'Intro',
            introStyleHidden: 'Intro Intro--hidden',
            overlayStyle: 'overlay',
            overlayStyleHidden: 'overlay overlay--hidden',
            articleHidden: false,
            articleStyle: 'Article',
            articleStyleHidden: 'Article Article--hidden',
            menuHidden: false,
            menuStyle: 'Menu',
            menuStyleHidden: 'Menu Menu--hidden',
            index: 0,
            checkedPaintings: []
        }
    }
    UNSAFE_componentWillMount = () => {
        if (localStorage.getItem('checkedPaintings')) {
            this.setState({
                checkedPaintings: JSON.parse(
                    localStorage.getItem('checkedPaintings')
                )
            }, console.log(this.state.checkedPaintings))
        }
        if (!localStorage.getItem('checkedPaintings')) {
            localStorage.setItem('checkedPaintings', JSON.stringify(
                this.state.checkedPaintings
            ))
        }
        console.log(this.state.checkedPaintings)
        
    }
    hideIntro = () => {
        this.setState({
            introHidden: this.state.introHidden ? false : true,
            appHidden: this.state.appHidden ? false : true,
        })
        // setTimeout(() => {
        //     setInterval(() => {
        //         document.querySelector('.Paintings').scrollBy(2, 0)
        //     }, 16)
        // }, 2000)
    };
    showArticle = (i) => {
        if (!this.state.checkedPaintings.includes(i)) this.state.checkedPaintings.push(i)
        localStorage.setItem('checkedPaintings' , JSON.stringify(this.state.checkedPaintings))
        this.setState({
            articleHidden: true,
            menuHidden: true
        })
        console.log(this.state.checkedPaintings);
        this.setState({index: i})

        return i 
    }
    hideArticle = () => {
        this.setState({
            articleHidden: false,
            menuHidden: false
        }) 
    }
    updateArticle = (i) => this.setState({index: i});
    render() {
        return (
            <div className={!this.state.appHidden ? this.state.appStyleHidden :      this.state.appStyle}>
                <Header
                    hideArticle={this.hideArticle}
                />
                <Intro
                    style={this.state.introHidden ? this.state.introStyleHidden :      this.state.introStyle}
                    overlayStyle={!this.state.introHidden ? this.state.overlayStyle :      this.state.overlayStyleHidden}
                    hideIntro={this.hideIntro}
                />
                <Paintings 
                    showArticle={(i) => this.showArticle(i)}
                    checkedPaintings={this.state.checkedPaintings}
                />
                <Article 
                    style={!this.state.articleHidden ? this.state.articleStyleHidden : this.state.articleStyle}
                    index={this.state.index}
                />
                <Menu
                    style={!this.state.menuHidden ? this.state.menuStyleHidden : this.state.menuStyle}
                    theIndex={this.state.index}
                    updateArticle={(i) => this.updateArticle(i)}
                />
            </div>
        );
    }
}

export default App;
