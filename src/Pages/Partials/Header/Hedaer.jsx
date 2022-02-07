import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

class Hedaer extends Component {
  render() {
    return (
      <Routes>
        <Route>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </Route>
      </Routes>
    );
  }
}

export default Hedaer;
