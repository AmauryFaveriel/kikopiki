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
            appHidden: false,
            appStyle: "App",
            appStyleHidden: "App App--overflow",
            introHidden: false,
            introStyle: "Intro",
            introStyleHidden: "Intro Intro--hidden",
            overlayStyle: "overlay",
            overlayStyleHidden: "overlay overlay--hidden",
            articleHidden: false,
            articleStyle: "Article",
            articleStyleHidden: "Article Article--hidden",
            isMenuHidden: true,
            isMenuHiddenDOM: true,
            menuStyle: "Menu",
            menuStyleHidden: "Menu Menu--hiddenDOM",
            conclusionHidden: true,
            conclusionStyle: "Conclusion",
            conclusionStyleHidden: "Conclusion Conclusion--hidden",
            index: 0,
            otherIndex: 0,
            visitedPaintings: []
        };
    }
    UNSAFE_componentWillMount = () => {
        if (localStorage.getItem("visitedPaintings"))
            this.setState({
                visitedPaintings: JSON.parse(localStorage.getItem("visitedPaintings"))
            });
        else
            localStorage.setItem(
                "visitedPaintings",
                JSON.stringify(this.state.visitedPaintings)
            );
    };

    hideMenu = () => this.setState({
        isMenuHidden: !this.state.isMenuHidden,
    })
    hideIntro = () =>
        this.setState({
            introHidden: !this.state.introHidden,
            appHidden: !this.state.appHidden
        });

    hideArticle = () =>
        this.setState({
            articleHidden: false,
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
            articleHidden: true,
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
            .scrollTo({ top: 1, behavior: "smooth" });
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
                conclusionHidden: false ,
                articleHidden: false,
                isMenuHiddenDOM: true
            });
        else
            alert(
                `${data.paintings.length - this.state.visitedPaintings.length}/${
                data.paintings.length
                } left !`
            );
    };
    hideConclusion = () => this.setState({
        conclusionHidden: true,
    })
    render() {
        return (
            <div
                className={
                    !this.state.appHidden
                        ? this.state.appStyleHidden
                        : this.state.appStyle
                }
            >
                <Header hideArticle={this.hideArticle} />
                <Intro
                    style={
                        this.state.introHidden
                            ? this.state.introStyleHidden
                            : this.state.introStyle
                    }
                    overlayStyle={
                      !this.state.introHidden
                        ? this.state.overlayStyle
                        : this.state.overlayStyleHidden
                    }
                    hideIntro={this.hideIntro}
                />
                <Paintings
                    showArticle={i => this.showArticle(i)}
                    visitedPaintings={this.state.visitedPaintings}
                    hideIntro={this.state.introHidden}
                />
                <Article
                    style={!this.state.articleHidden ? this.state.articleStyleHidden : this.state.articleStyle
                    }
                    hideArticle={this.hideArticle}
                    index={this.state.index}
                    otherIndex={this.state.otherIndex}
                    nextArticle={this.nextArticle}
                />
                <Menu
                    style={
                        !this.state.menuHidden
                            ? this.state.menuStyleHidden
                            : this.state.menuStyle
                    }
                    AppIndex={this.state.index}
                    updateArticle={i => this.updateArticle(i)}
                    visitedPaintings={this.state.visitedPaintings}
                    click={this.goToConclusion}
                    hideMenu={this.hideMenu}
                    isMenuHidden={this.state.isMenuHidden}
                    isMenuHiddenDOM={this.state.isMenuHiddenDOM}
                />
                <Conclusion
                    style={
                        this.state.conclusionHidden
                            ? this.state.conclusionStyleHidden
                            : this.state.conclusionStyle
                    }
                    hideConclusion={this.hideConclusion}
                />
            </div>
        );
    }
}
export default App;