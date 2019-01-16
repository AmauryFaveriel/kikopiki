import React, { Component } from 'react';
import data from './data';

import ArticleHeader from './ArticleHeader';
import ArticleZooms from './ArticleZooms';
import ArticleOthers from './ArticleOthers';
import TwoPaitings from './TwoPaintings';
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            painting: data.paintings[this.props.index],
            otherIndex: 0,
            contentTextStyle: 'Article__content__text',
            contentTextActiveStyle: 'Article__content__text--active',
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
            }
        }
    }
    UNSAFE_componentWillUpdate = (nextProps) => {
        if (nextProps.index !== this.props.index) this.setState({painting: data.paintings[nextProps.index]})
    }
    focusBorder = () => {
        const winCenterHeight = window.innerHeight / 2;
        const DOMzoomsTexts = document.querySelectorAll('.Article__zooms__text');
        const activeClass = 'Article__zooms__text--active'
        for (let i = 0; i < DOMzoomsTexts.length; i++) {
            const text = DOMzoomsTexts[i]
            let textTop = text.getBoundingClientRect().top;
            let textBottom = text.getBoundingClientRect().bottom;
            if (textTop <= winCenterHeight) {
                if (i < data.paintings[this.props.index].zooms.length) {
                    let mainPos = data.paintings[this.props.index].zooms[i].zoom.main
                    let inspiredPos = data.paintings[this.props.index].zooms[i].zoom.inspired
                    this.setState({
                        mainZoomIn: { 
                            transformOrigin: `${mainPos.x}px ${mainPos.y}px`,
                            transform: `scale(${mainPos.scale})`
                        },
                        inspiredZoomIn: { 
                            transformOrigin: `${inspiredPos.x}px ${inspiredPos.y}px`,
                            transform: `scale(${inspiredPos.scale})`
                        }
                    })
                }
                console.log(this.state.mainZoomIn); 
                console.log(this.state.inspiredZoomIn); 
                text.classList.add(activeClass);
                
                if (i === 0) this.setState({isDraggable: false});
                if (textBottom <= winCenterHeight) {
                    text.classList.remove(activeClass)
                    this.setState({
                        mainZoomIn: { 
                            transformOrigin: '0 0',
                            transform: 'scale(1)'
                        },
                        inspiredZoomIn: { 
                            transformOrigin: '0 0',
                            transform: 'scale(1)'
                        },
                    })
                };
            }
            else text.classList.remove(activeClass);
            if (textTop >= winCenterHeight && i === 0) this.setState({isDraggable: true});
        }
    }
    zoomsIn = () => {

    }
    render = () => {
        return (
            <article className={this.props.style}>
                <TwoPaitings
                    painting={this.state.painting}
                    otherIndex={this.state.otherIndex}
                    style={this.state.isDraggable ? this.state.resizerStyle : this.state.resizerHiddenStyle}
                    mainStyle={this.state.mainZoomIn}
                    inspiredStyle={this.state.inspiredZoomIn}
                />
                <article className="Article__content" 
                onScroll={this.focusBorder}
                >
                    <ArticleHeader
                        painting={this.state.painting}
                    />
                    <h3 className="Article__intro">{data.paintings[this.props.index].intro}</h3>
                    <ArticleZooms
                        painting={this.state.painting}
                    />
                    <ArticleOthers
                        painting={this.state.painting}
                    />
                </article>
            </article>
        )
    }
}

export default Article;