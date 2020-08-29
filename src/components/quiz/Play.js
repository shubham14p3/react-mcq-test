import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Play extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: 0,
  //     };
  //   }

  //   increaseCount = () => {
  //     this.setState({
  //       counter: 5,
  //     });
  //   };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz page</title>
        </Helmet>
        <div className="questions">
            <h2>Quiz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
              <span className="lifeline">2</span>
            </p>
            <p>
              <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
              <span className="lifeline"> 5</span>
            </p>
          </div>    
          <div>
              <p>
                  <span className="left" style={{float:'left'}}>
                      1 of 15
                  </span>
                  <span className="right">2:35
                  <span className="mdi mdi-clock-outline mdi-24px">
                  </span></span>
              </p>
          </div>
          <h5>Google was Founder in which year?</h5>
          <div className="options-containers">
            <p className="options">1996</p>
            <p className="options">1997</p>
          </div>
          <div className="options-containers">
            <p className="options">1998</p>
            <p className="options">2000</p>
          </div>
          <div className="button-container">
            <button>Previous</button>
            <button>Next</button>
            <button>Quit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
