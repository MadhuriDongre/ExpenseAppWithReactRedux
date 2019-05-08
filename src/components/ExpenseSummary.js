import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral'
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';

export const ExpenseSummary =({expenseCount, expensesTotal})=>(
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expense(s) totalling <span>&#x20B9;{numeral(expensesTotal).format('0,0[.]00')}</span></h1>
            <div className="page-header__action">
                <Link className="button" to='/create'>Add Expense</Link>
            </div>
        </div>
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