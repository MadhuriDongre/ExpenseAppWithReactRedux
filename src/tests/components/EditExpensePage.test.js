import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import * as style from 'react-confirm-alert/src/react-confirm-alert.css';

let startEditExpense,history,wrapper,startRemoveExpense;
beforeEach(()=>{
    startEditExpense = jest.fn()
    startRemoveExpense= jest.fn()
    history ={push : jest.fn()}
    wrapper=shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expenses={expenses[0]}/>)
})

test('should render EditExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith('1',expenses[0]);
});

test('should handle startRemoveExpense',()=>{
    wrapper.find('button').simulate('click')
    expect(wrapper.find(".react-confirm-alert-body")).toBeTruthy();
});

