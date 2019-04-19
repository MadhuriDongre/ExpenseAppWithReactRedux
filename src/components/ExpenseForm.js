import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props){
        super();
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?props.expense.amount.toString():'',
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            focused:false,
            error:null
        };
    }
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    };

    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>({note}));
    };
    onAmountChange=(e)=>{
        const amount = e.target.value;
        (!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/))? this.setState(()=>({amount})):null;
    }
    onDateChange=(createdAt)=>{
        // const createdAt=e.target.value
        createdAt?this.setState(()=>({createdAt})):null
    }
    onFocusChange=({focused})=>{
        this.setState(()=>({focused}))
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            const error= "Please provide Description and Amount to create expense"
            this.setState(()=>({error}))
        }
        else{
            this.setState(()=>({error:null}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10),
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return (
            <div>
                <p>ExpenseForm text</p>
                <form onSubmit={this.onSubmit}> 
                    <input type="text" placeholder="description" value={this.state.description} autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input type="text" value ={this.state.amount} placeholder="amount"
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea placeholder="add a note for expense (optional)" value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                    {this.state.error && <p className="warning">{this.state.error}</p>}
                </form>
            </div>
        );
    }
}