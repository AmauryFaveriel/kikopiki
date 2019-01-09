import React, { Component } from 'react';

import Intro from './Intro'
import Paintings from './Paintings';
import Article from './Article';
import { throttleTime } from 'rxjs/operators';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                border: '10px red solid',
            },
            articleStyle: 'Article Article--hidden',
            index: 0
        }
    }
    showArticle = () => {
        this.setState({articleStyle: 'Article'})
    }
    gatchaBitch = (i) => {
        console.log(i)
        this.setState({index: i})
        return i
    }
    render() {
        return (
            <div className="App">
                <Intro/>
                <Paintings 
                    showArticle={this.showArticle}
                    catchIndex={(i) => this.gatchaBitch(i)}
                />
                <Article 
                    articleStyle={this.state.articleStyle}
                    index={this.state.index}
                />
            </div>
        );
    }
}

export default App;
