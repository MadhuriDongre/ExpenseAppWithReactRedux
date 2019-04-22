import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';

export const ExpenseSummary =({expenseCount, expensesTotal})=>(
    <div>
        <p>{`Viewing ${expenseCount} expense(s) totalling `}{<span>&#x20B9;</span>}{` ${numeral(expensesTotal).format('0,0[.]00')}`}</p>
    </div>
);

const mapStateToProps = (state)=>{
    const visibleExpense=selectExpense(state.expenses,state.filters)
    return {
        expenseCount:visibleExpense.length,
        expensesTotal:selectExpenseTotal(visibleExpense)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);