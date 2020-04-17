import React from 'react';
import {Menu} from './Components/Navigation/Menu';
import BudgetRouter from './Components/Navigation/BudgetRouter';
import {BrowserRouter, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">
      <header></header>
      <BrowserRouter>
        <section>
          <Menu />
          <main className="container">
              <BudgetRouter />
          </main>
        </section>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
