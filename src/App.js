import React, { Component } from 'react';

import Article from './Article';
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
            articleHidden: false,
            articleStyle: 'Article',
            articleStyleHidden: 'Article Article--hidden',
            menuHidden: false,
            menuStyle: 'Menu',
            menuStyleHidden: 'Menu Menu--hidden',
            index: 0
        }
    }
    showArticle = (i) => {
        this.setState({
            articleHidden: this.state.articleHidden ? false : true,
            menuHidden: true
        })
        console.log(i)
        this.setState({index: i})
        window.history.pushState("object or string", "Title", `/painting-${i}`);
        return i
        
    }
    updateArticle = (i) => this.setState({index: i});
    render() {
        return (
            <div className="App">
                <Intro/>
                <Paintings 
                    showArticle={(i) => this.showArticle(i)}
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
