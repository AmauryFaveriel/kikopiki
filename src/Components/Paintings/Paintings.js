import React, { Component } from "react";
import get from "lodash/get";

import data from "../../data";
import Painting from "./Painting/Painting";
import Arrow from "./Arrow/Arrow";

class Paintings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      HorizontalScrollStyle: {
        height: "auto",
        width: "auto",
        overflow: "scroll",
        position: "initial"
      },
      isScrollingLeft: false,
      isScrollingRight: false,
      index: 0
    };
    this.paintingsRefs = data.paintings.map(() => React.createRef());
  }

  scrollLeft = () => {
    this.setState({ index: this.state.index - 1 }, () => {
      const nextPaintingRef = get(this.paintingsRefs, this.state.index);
      const goToNextPainting = nextPaintingRef ? nextPaintingRef.current : null;

      if (goToNextPainting) {
        goToNextPainting.scrollIntoView({
          behavior: "smooth",
          inline: "start"
        });
      }
    });
  };

  scrollRight = () => {
    this.setState({ index: this.state.index + 1 }, () => {
      const nextPaintingRef = get(this.paintingsRefs, this.state.index);
      const goToNextPainting = nextPaintingRef ? nextPaintingRef.current : null;

      if (goToNextPainting) {
        goToNextPainting.scrollIntoView({
          behavior: "smooth",
          inline: "start"
        });
      }
    });
  };

  render() {
    return (
      <section className="Paintings">
        <Arrow
          isLeft={true}
          goToNextPainting={this.scrollLeft}
          hideIntro={this.props.hideIntro}
        />

        {data.paintings.map((x, i) => (
          <div key={i} ref={this.paintingsRefs[i]}>
            <Painting
              x={x}
              index={i}
              showHover={this.props.hideIntro}
              showArticle={i => this.props.showArticle(i)}
              visitedPaintings={this.props.visitedPaintings}
            />
          </div>
        ))}

        <Arrow
          isLeft={false}
          goToNextPainting={this.scrollRight}
          hideIntro={this.props.hideIntro}
        />
      </section>
    );
  }
}

export default Paintings;
