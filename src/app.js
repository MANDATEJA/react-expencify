import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 2000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 3000 }));
store.dispatch(setTextFilter('water'));

setTimeout(()=> {
  store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));