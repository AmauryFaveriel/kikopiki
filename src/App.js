import React, { Component } from 'react';

import Intro from './Intro'
import Paintings from './Paintings';
import Article from './Article';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                border: '10px red solid',
            },
            articleStyle: 'Article Article--hidden'
        }
    }
    showArticle = () => {
        this.setState({articleStyle: 'Article'})
        console.log('wow')
    }
    render() {
        return (
            <div className="App">
                <Intro/>
                <Paintings 
                    showArticle={this.showArticle}
                />
                <Article 
                    articleStyle={this.state.articleStyle}
                    index={0}
                    catchIndex={(i) => console.log(i)}
                />
            </div>
        );
    }
}

export default App;
