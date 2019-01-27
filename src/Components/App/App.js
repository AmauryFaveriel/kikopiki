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
            visitedPaintings: []
        };
    };
    UNSAFE_componentWillMount = () => {
        if (localStorage.getItem('visitedPaintings')) this.setState({visitedPaintings: JSON.parse(localStorage.getItem('visitedPaintings'))})
        else localStorage.setItem('visitedPaintings', JSON.stringify(this.state.visitedPaintings))
    };
    hideIntro = () => this.setState({
        introHidden: !this.state.introHidden,
        appHidden: !this.state.appHidden
    });
    hideArticle = () => this.setState({
        articleHidden: false,
        menuHidden: false
    });
    showArticle = (i) => {
        if (!this.state.visitedPaintings.includes(i)) this.state.visitedPaintings.push(i);
        localStorage.setItem('visitedPaintings' , JSON.stringify(this.state.visitedPaintings));
        this.setState({
            articleHidden: true,
            menuHidden: true,
            index: i
        });
        return i;
    };
    updateArticle = (i) => {
        if (!this.state.visitedPaintings.includes(i)) {
            this.state.visitedPaintings.push(i);
        }
        document.querySelector('.ArticleContent').scrollTo({top: 0, behavior: 'smooth'});
        console.log('wew')
        localStorage.setItem('visitedPaintings' , JSON.stringify(this.state.visitedPaintings))
        this.setState({index: i});
    };
    goToConclusion = (e) => {
        e.preventDefault();
        if (this.state.visitedPaintings.length === data.paintings.length) this.setState({conclusionHidden: false});
        else  alert(`${data.paintings.length - this.state.visitedPaintings.length}/${data.paintings.length} left !`);
    };
    hideMenu = () => this.setState({menuHidden: !this.state.menuHidden});
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
                    visitedPaintings={this.state.visitedPaintings}
                />
                <Article 
                    style={!this.state.articleHidden ? this.state.articleStyleHidden : this.state.articleStyle}
                    index={this.state.index}
                />
                <Menu
                    style={!this.state.menuHidden ? this.state.menuStyleHidden : this.state.menuStyle}
                    AppIndex={this.state.index}
                    updateArticle={(i) => this.updateArticle(i)}
                    visitedPaintings={this.state.visitedPaintings}
                    click={this.goToConclusion}
                    hideMenu={this.hideMenu}
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
