import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense} from '../actions/expenses';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export class EditExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.startEditExpense(this.props.expenses.id,expense);
        this.props.history.push('/');
    }
    onClick=()=>{
        confirmAlert({
            message: 'Are you sure you wish to delete this expense?',
            buttons: [
              {
                label: 'Delete',
                onClick: () => {
                    this.props.startRemoveExpense({id:this.props.expenses.id});
                    this.props.history.push('/')
                }
              },
              {
                label: 'Cancel',
                onClick: () => {}
              }
            ]
          });
    }
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                        expense={this.props.expenses}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>Remove Expense</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        expenses:state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
}
const mapDispatchToProps=(dispatch,props)=>({
    startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense:(data)=>dispatch(startRemoveExpense(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);