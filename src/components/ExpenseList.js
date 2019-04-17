import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList =(props)=>(
    <div>
        <p>ExpenseList</p>
        {props.expenses.length===0?(<p>No expense found!!</p>): (props.expenses  && props.expenses.map((expense)=>{
            return (
                <ExpenseListItem key={expense.id} {...expense}/>
            )}))
        }
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses:selectExpense(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);