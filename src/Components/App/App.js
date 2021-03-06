import React, { Component } from 'react';
import { paintings } from '../../data';
import Header from '../Header/Header.js';
import Intro from '../Intro/Intro';
import Paintings from '../Paintings/Paintings';
import Article from '../Article/Article';
import Menu from '../Menu/Menu';
import Conclusion from '../Conclusion/Conclusion';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAppHidden: false,
            isIntroHidden: false,
            isArticleHidden: true,
            isMenuHidden: false,
            isMenuHiddenDOM: true,
            isConclusionHidden: true,
            isConclusionAvailable: false,
            index: 0,
            otherIndex: 0,
            visitedPaintings: [],
        };
    }
    UNSAFE_componentWillMount = () => {
        const makeResizableDiv = () => {
            const DOMimgBox = document.querySelector('.DraggablePaintings__imgBox__resizable');
            const DOMresizer = document.querySelector('.DraggablePaintings__imgBox__resizable__resizer')
            const minimum_size = 0;
            const maximum_size = 666;
            let width = 600;
            DOMimgBox.style.width = width + 'px'
            let original_width = 0;
            let original_x = 0;
            let original_mouse_x = 0;
            DOMresizer.addEventListener('mousedown', (e) => {
                e.preventDefault()
                original_width = parseFloat(getComputedStyle(DOMimgBox, null).getPropertyValue('width').replace('px', ''));
                original_x = DOMimgBox.getBoundingClientRect().left;
                original_mouse_x = e.pageX;
                window.addEventListener('mousemove', resize)
                window.addEventListener('mouseup', stopResize)
            })
        
            const resize = (e) => {
                width = original_width + (e.pageX - original_mouse_x);
                if (width > minimum_size && width < maximum_size) DOMimgBox.style.width = width + 'px';
            }
            const stopResize = () => window.removeEventListener('mousemove', resize);
        }

        const tick = setInterval(() => {
            if (document.querySelector('.DraggablePaintings__imgBox__resizable')) {
            makeResizableDiv();
            clearInterval(tick);
            }
        }, 200);
        if (localStorage.getItem('visitedPaintings')) this.setState({visitedPaintings: JSON.parse(localStorage.getItem('visitedPaintings'))});
        else localStorage.setItem('visitedPaintings', JSON.stringify(this.state.visitedPaintings));
    };
    toggleMenu = () => this.setState({isMenuHidden: !this.state.isMenuHidden})
    hideIntro = () => this.setState({
        isIntroHidden: !this.state.isIntroHidden,
        isAppHidden: !this.state.isAppHidden
    });
    hideArticle = () => this.setState({
        isArticleHidden: !this.state.isArticleHidden,
        isMenuHiddenDOM: !this.state.isMenuHiddenDOM,
    });
    showArticle = i => {
        if (!this.state.visitedPaintings.includes(i)) this.state.visitedPaintings.push(i);
        localStorage.setItem('visitedPaintings', JSON.stringify(this.state.visitedPaintings)
        );
        document.querySelector('.DraggablePaintings__imgBox__resizable').style.width = '600px';
        this.setState({
            isArticleHidden: !this.state.isArticleHidden,
            isMenuHidden: false,
            isMenuHiddenDOM: false,
            index: i
        });
        return i;
    };

    updateArticle = i => {
        this.addVisitedPainting(i);
        this.setState({ index: i });
    };
    nextArticle = () => this.setState({ index: this.state.index + 1 }, () => this.addVisitedPainting(this.state.index));
    addVisitedPainting = index => {
        if (!this.state.visitedPaintings.includes(index)) this.state.visitedPaintings.push(index);
            document.querySelector('.DraggablePaintings__imgBox__resizable').style.width = '600px';
            document.querySelector('.ArticleContent').scrollTo({ top: 1, behavior: 'smooth'});
            localStorage.setItem('visitedPaintings', JSON.stringify(this.state.visitedPaintings));
    }
    goToConclusion = e => {
        e.preventDefault();
        if (this.state.visitedPaintings.length === paintings.length) this.setState({ 
            isConclusionHidden: false ,
            isArticleHidden: !this.state.isArticleHidden,
            isMenuHiddenDOM: true
        });
    };
    hideConclusion = () => this.setState({isConclusionHidden: true})
    render() {
        return (
            <div 
                className={this.state.isAppHidden ? 'App' : 'App App--overflow'}
            >
                <Header/>
                <Intro
                    bool={this.state.isIntroHidden}
                    click={this.hideIntro}
                    overlayStyle={this.state.isIntroHidden ? 'Overlay Overlay--hidden' : 'Overlay'}
                />
                <Paintings
                    showArticle={i => this.showArticle(i)}
                    visitedPaintings={this.state.visitedPaintings}
                    bool={this.state.isIntroHidden}
                />
                <Article
                    bool={this.state.isArticleHidden}
                    hideArticle={this.hideArticle}
                    index={this.state.index}
                    otherIndex={this.state.otherIndex}
                    nextArticle={this.nextArticle}
                />
                <Menu
                    bool={this.state.isConclusionAvailable}
                    AppIndex={this.state.index}
                    updateArticle={i => this.updateArticle(i)}
                    visitedPaintings={this.state.visitedPaintings}
                    click={this.goToConclusion}
                    toggle={this.toggleMenu}
                    isMenuHidden={this.state.isMenuHidden}
                    isMenuHiddenDOM={this.state.isMenuHiddenDOM}
                />
                <Conclusion
                    bool={this.state.isConclusionHidden}
                    hideConclusion={this.hideConclusion}
                />
                
            </div>
        );
    }
}
export default App;