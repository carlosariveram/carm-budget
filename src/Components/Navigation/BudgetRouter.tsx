import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
//import {Home} from '../../Components/Main/Home';
import {IncomeForm} from '../Settings/IncomeForm';
import {HouseHoldIndex} from '../Settings/Household';

const routes = [
  /*{
    path: '/',
    component: null
  },*/
  {
    path: '/settings/household',
    component: HouseHoldIndex
  },
  {
    path: '/settings/income',
    component: IncomeForm
  }
];

export default class BudgetRouter extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} render={props => (
            <route.component {...props} />
            )} 
          />
        ))}
      </Switch>
    );
  }
}