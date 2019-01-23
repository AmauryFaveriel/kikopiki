import React, { Component } from 'react';
import data from '../../data'
import Header from '../Header/Header.js';
import Intro from '../Intro/Intro'
import Paintings from '../Paintings/Paintings';
import Article from '../Article/Article';
import Menu from '../Menu/Menu';
import Conclusion from '../Conclusion/Conclusion';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            conclusionHidden: true,
            conclusionStyle: 'Conclusion',
            conclusionStyleHidden: 'Conclusion Conclusion--hidden',
            index: 0,
            checkedPaintings: []
        };
    };
    UNSAFE_componentWillMount = () => {
        if (localStorage.getItem('checkedPaintings')) this.setState({checkedPaintings: JSON.parse(localStorage.getItem('checkedPaintings'))})
        else localStorage.setItem('checkedPaintings', JSON.stringify(this.state.checkedPaintings))
    };
    hideIntro = () => this.setState({
        introHidden: this.state.introHidden ? false : true,
        appHidden: this.state.appHidden ? false : true,
    });
    hideArticle = () => this.setState({
        articleHidden: false,
        menuHidden: false
    });
    showArticle = (i) => {
        if (!this.state.checkedPaintings.includes(i)) this.state.checkedPaintings.push(i);
        localStorage.setItem('checkedPaintings' , JSON.stringify(this.state.checkedPaintings));
        this.setState({
            articleHidden: true,
            menuHidden: true,
            index: i
        });
        return i;
    };
    updateArticle = (i) => {
        if (!this.state.checkedPaintings.includes(i)) {
            this.state.checkedPaintings.push(i);
        }
        document.querySelector('.Article__content').scrollTo({top: 0, behavior: 'smooth'});
        console.log('wew')
        localStorage.setItem('checkedPaintings' , JSON.stringify(this.state.checkedPaintings))
        this.setState({index: i});
    };
    goToConclusion = (e) => {
        e.preventDefault();
        if (this.state.checkedPaintings.length === data.paintings.length) this.setState({conclusionHidden: false});
        else alert(`${data.paintings.length - this.state.checkedPaintings.length}/${data.paintings.length} left !`);
    };
    render() {
        return (
            <div className={!this.state.appHidden ? this.state.appStyleHidden : this.state.appStyle}>
                <Header
                    hideArticle={this.hideArticle}
                />
                <Intro
                    style={this.state.introHidden ? this.state.introStyleHidden : this.state.introStyle}
                    overlayStyle={!this.state.introHidden ? this.state.overlayStyle : this.state.overlayStyleHidden}
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
                    checkedPaintings={this.state.checkedPaintings}
                    click={this.goToConclusion}
                />
                <Conclusion 
                    style={this.state.conclusionHidden ? this.state.conclusionStyleHidden : this.state.conclusionStyle}
                    click={() => this.setState({conclusionHidden: true})}
                />
            </div>
        );
    };
};
export default App;
