import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardpage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));