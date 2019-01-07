import React, { Component } from 'react';

import Intro from './Intro'
import Paintings from './Paintings';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Intro/>
                <Paintings/>
            </div>
        );
    }
}

export default App;
