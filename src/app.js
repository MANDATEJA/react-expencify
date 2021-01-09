import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardpage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my create expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is from help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">create</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    <NavLink to="help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardpage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));