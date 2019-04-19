import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
});
store.dispatch(addExpense({description:"rent",amount:100, createdAt:1000}));
store.dispatch(addExpense({description:"coffee",amount:10,createdAt:973892830}));
store.dispatch(addExpense({description:"gas bill",amount:19500,createdAt:10000}));

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('app'));

