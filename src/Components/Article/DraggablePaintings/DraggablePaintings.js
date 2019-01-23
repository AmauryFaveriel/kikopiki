import React, { Component } from 'react';

class DraggablePaintings extends Component {
    render = () => {
        return (
            <section className="DraggablePaintings">
                <section className={this.props.theStyle}>
                    <div className='DraggablePaintings__imgBox DraggablePaintings__imgBox__resizable'>
                        <div className={this.props.style}></div>
                        <img 
                            className='DraggablePaintings__imgBox__img' 
                            src={this.props.painting.inspired_painting.visual} 
                            style={this.props.inspiredStyle}
                            alt=""/>
                    </div>
                    <div className='DraggablePaintings__imgBox'>
                        <img 
                        className='DraggablePaintings__imgBox__img'
                        src={this.props.painting.main_painting.visual}
                        style={this.props.mainStyle}
                        alt=""/>
                    </div>
                </section>
                <section className="OtherPaintings">
                <img src={this.props.painting.other_paintings[this.props.otherIndex].visual} alt="img"/>
                </section>
            </section>
        )
    }
}

export default DraggablePaintings;