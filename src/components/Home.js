import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import{Link} from 'react-router-dom';
const Home = () => (
  <Fragment>
    <Helmet>
      <title>Quiz App</title>
    </Helmet>
    <div id="home">
      <section>
        <div>
          <span className="mdi mdi-cube-outline cube"></span>
        </div>
        <h1>QUIz App</h1>
        <div className="play-button-container">
          <ul>
            <li>
              <Link to="/play/instructions">Play</Link>
            </li>
          </ul>
        </div>
        <div className="auth-container">
          <ul>
            <li>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      
      </section>
    </div>
  </Fragment>
);

export default Home;
