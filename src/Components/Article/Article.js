import React, { Component } from 'react';
import data from '../../data';

import ArticleHeader from './ArticleContent/ArticleHeader/ArticleHeader';
import ArticleZooms from './ArticleContent/ArticleZooms/ArticleZooms';
import ArticleOthers from './ArticleContent/ArticleOthers/ArticleOthers';
import DraggablePaintings from './DraggablePaintings/DraggablePaintings';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            painting: data.paintings[this.props.index],
            isDraggablePaintingsHidden: false,
            DraggablePaintingsStyle: 'DraggablePaintings',
            DraggablePaintingsHiddenStyle: 'DraggablePaintings hidden',
            isDraggable: true,
            resizerStyle: 'Article__imgBoxes__imgBox__resizable__resizer',
            resizerHiddenStyle: 'Article__imgBoxes__imgBox__resizable__resizer--hidden',
            mainZoomIn: {
                transformOrigin: '0 0',
                transform: 'scale(1)'
            },
            inspiredZoomIn: {
                transformOrigin: '0 0',
                transform: 'scale(1)'
            },
            otherIndex: 0
        };
    };
    UNSAFE_componentWillMount = () => this.setState({painting: data.paintings[this.props.index]});
    UNSAFE_componentWillUpdate = (nextProps) => {
        if (nextProps.index !== this.props.index) this.setState({painting: data.paintings[nextProps.index]})
    };
    focusBorder = () => {
        // recove the center height of the window
        const winCenterHeight = window.innerHeight / 2;
        // recove all the texts
        const DOMzoomsTexts = document.querySelectorAll('.Article__zooms__text');
        // declare the focus css class
        const activeClass = 'Article__zooms__text--active';
        // for every text
        for (let i = 0; i < DOMzoomsTexts.length; i++) {
            
            // recove the current text
            const that = DOMzoomsTexts[i];
            // recove the top and bottom of the current text
            let textTop = that.getBoundingClientRect().top;
            let textBottom = that.getBoundingClientRect().bottom;
            // if the text's top is above the middle of the window
            if (textTop <= winCenterHeight) {
                if (i >= 3) this.setState({
                    isDraggablePaintingsHidden: true,
                    otherIndex: (i - this.state.painting.zooms.length)
                });
                else this.setState({isDraggablePaintingsHidden: false});
                this.setFocus(i);
                // add the focus border
                that.classList.add(activeClass);
                // for the first element, disable drag
                if (i === 0) {
                    document.querySelector('.Article__imgBoxes__imgBox__resizable').style.width = '333px';
                    this.setState({isDraggable: false});
                };
                // and if the text's bottom is above the middle of the window, remove the focus border
                if (textBottom <= winCenterHeight) that.classList.remove(activeClass);
            }
            // when I scroll to top
            else {
                // remove the focus border
                that.classList.remove(activeClass);
                // for the first element, reset the focus
                this.resetFocus(i);
            };
            // for the first element when I scroll to top, enable drag
            if (textTop >= winCenterHeight && i === 0) this.setState({isDraggable: true});
        };
    };
    setFocus = (i) => {
        if (i < this.state.painting.zooms.length) {
            let mainPos = this.state.painting.zooms[i].zoom.main;
            let inspiredPos = this.state.painting.zooms[i].zoom.inspired;
            this.setState({
                mainZoomIn: { 
                    transformOrigin: `${mainPos.x}px ${mainPos.y}px`,
                    transform: `scale(${mainPos.scale})`
                },
                inspiredZoomIn: { 
                    transformOrigin: `${inspiredPos.x}px ${inspiredPos.y}px`,
                    transform: `scale(${inspiredPos.scale})`
                }
            });
        };
    };
    resetFocus = (i) => {
        if (i === 0) this.setState({
            mainZoomIn: { 
                transformOrigin: '0 0',
                transform: 'scale(1)'
            },
            inspiredZoomIn: { 
                transformOrigin: '0 0',
                transform: 'scale(1)'
            },
        });
    };
    render = () => {
        return (
            <article className={this.props.style}>
                <DraggablePaintings
                    theStyle={this.state.isDraggablePaintingsHidden ? this.state.DraggablePaintingsHiddenStyle : this.state.DraggablePaintingsStyle}
                    painting={this.state.painting}
                    style={this.state.isDraggable ? this.state.resizerStyle : this.state.resizerHiddenStyle}
                    mainStyle={this.state.mainZoomIn}
                    inspiredStyle={this.state.inspiredZoomIn}
                    otherIndex={this.state.otherIndex}
                />
                <article 
                    className="Article__content"
                    onScroll={this.focusBorder}
                >
                    <ArticleHeader
                        painting={this.state.painting}
                    />
                    <h3 className="Article__intro">{this.state.painting.intro}</h3>
                    <ArticleZooms
                        painting={this.state.painting}
                    />
                    <ArticleOthers
                        painting={this.state.painting}
                    />
                </article>
            </article>
        );
    };
};
export default Article;
