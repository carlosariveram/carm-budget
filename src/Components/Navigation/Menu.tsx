import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Configuration
            <ul>
              <li>
                <Link to="/settings/household">Household</Link>
              </li>
              <li>
                <Link to="/settings/income">Income</Link>
              </li>
              <li>
                <Link to="/settings/expenses-and-savings">Expenses & Savings</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}