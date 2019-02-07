import React, { Component } from "react";
import data from "../../data";
import Header from "../Header/Header.js";
import Intro from "../Intro/Intro";
import Paintings from "../Paintings/Paintings";
import Article from "../Article/Article";
import Menu from "../Menu/Menu";
import Conclusion from "../Conclusion/Conclusion";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAppHidden: false,
            isIntroHidden: false,
            isArticleHidden: false,
            isMenuHidden: true,
            isMenuHiddenDOM: true,
            menuStyle: "Menu",
            menuStyleHidden: "Menu Menu--hiddenDOM",
            isConclusionHidden: true,
            index: 0,
            otherIndex: 0,
            visitedPaintings: [],
            isNoConclusionHidden: true
        };
    }
    UNSAFE_componentWillMount = () => {
        if (localStorage.getItem("visitedPaintings")) this.setState({visitedPaintings: JSON.parse(localStorage.getItem("visitedPaintings"))});
        else localStorage.setItem("visitedPaintings", JSON.stringify(this.state.visitedPaintings));
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
        if (!this.state.visitedPaintings.includes(i))
            this.state.visitedPaintings.push(i);
        localStorage.setItem(
            "visitedPaintings",
            JSON.stringify(this.state.visitedPaintings)
        );
        document.querySelector('.DraggablePaintings__imgBox__resizable').style.width = '600px';
        this.setState({
            isArticleHidden: !this.state.isArticleHidden,
            isMenuHidden: true,
            isMenuHiddenDOM: false,
            index: i
        });
        return i;
    };

    updateArticle = i => {
        if (!this.state.visitedPaintings.includes(i)) {
            this.state.visitedPaintings.push(i);
        }
        document.querySelector('.DraggablePaintings__imgBox__resizable').style.width = '600px';
        document
            .querySelector(".ArticleContent")
            .scrollTo({ top: 1});
        localStorage.setItem(
            "visitedPaintings",
            JSON.stringify(this.state.visitedPaintings)
        );
        this.setState({ index: i });
    };
    nextArticle = () => {

        this.setState({ index: this.state.index + 1 }, () => {
            if (!this.state.visitedPaintings.includes(this.state.index)) {
                this.state.visitedPaintings.push(this.state.index);
            }
            document.querySelector('.DraggablePaintings__imgBox__resizable').style.width = '600px';
            document
                .querySelector(".ArticleContent")
                .scrollTo({ top: 1, behavior: "smooth" });
            localStorage.setItem(
                "visitedPaintings",
                JSON.stringify(this.state.visitedPaintings)
            );
        });
        
    };

    goToConclusion = e => {
        e.preventDefault();
        if (this.state.visitedPaintings.length === data.paintings.length)
            this.setState({ 
                isConclusionHidden: false ,
                isArticleHidden: !this.state.isArticleHidden,
                isMenuHiddenDOM: true
            });
    };
    hideConclusion = () => this.setState({
        isConclusionHidden: true,
    })
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
                    style={!this.state.isArticleHidden ? this.state.articleStyleHidden : this.state.articleStyle
                    }
                    hideArticle={this.hideArticle}
                    index={this.state.index}
                    otherIndex={this.state.otherIndex}
                    nextArticle={this.nextArticle}
                />
                <Menu
                bool={this.state.isNoConclusionHidden}
                    style={
                        !this.state.menuHidden
                            ? this.state.menuStyleHidden
                            : this.state.menuStyle
                    }
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