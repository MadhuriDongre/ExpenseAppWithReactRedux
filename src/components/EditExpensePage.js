import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage =(props)=>{
    console.log(props);
    return (
        <div>
           <ExpenseForm 
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expenses.id,expense));
                    props.history.push('/');
                }}
                expense={props.expenses}
            />
            <button onClick={()=>{
                props.dispatch(removeExpense({id:props.expenses.id}));
                props.history.push('/')
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps=(state,props)=>{
    return {
        expenses:state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditExpensePage);