import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate,setEndDate,setStartDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component{
    state={
        focused:null
    }
    onDatesChange=({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange=(focused)=>{
        this.setState(()=>({focused}))
    }   
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    e.target.value==="amount"?this.props.dispatch(sortByAmount(e.target.value)):this.props.dispatch(sortByDate(e.target.value));
                }}>
                    <option value ="date">Date</option>
                    <option value ="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        )
    }
}
// const ExpenseListFilters =(props)=>(
//     <div>
//         <input type="text" value={props.filters.text} onChange={(e)=>{
//             props.dispatch(setTextFilter(e.target.value));
//         }}/>
//         <select value={props.filters.sortBy} onChange={(e)=>{
//             e.target.value==="amount"?props.dispatch(sortByAmount(e.target.value)):props.dispatch(sortByDate(e.target.value));
//         }}>
//             <option value ="date">Date</option>
//             <option value ="amount">Amount</option>
//         </select>

//     </div>
// );

const mapStateToProps=(state)=>{
    return {
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters);