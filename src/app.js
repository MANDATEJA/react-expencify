import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardpage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));