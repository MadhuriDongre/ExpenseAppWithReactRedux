import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate,setEndDate,setStartDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component{
    state={
        focused:null
    }
    onDatesChange=({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange=(focused)=>{
        this.setState(()=>({focused}))
    }   
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value);
    }
    onSortChange=(e)=>{
        e.target.value==="amount"?this.props.sortByAmount():this.props.sortByDate();
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value ="date">Date</option>
                    <option value ="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="start_date_input"
                    endDateId="end_date_input"
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

const mapStateToProps=(state)=>({
    filters:state.filters
})

const mapDisptchToProps=(dispatch)=>({
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate)=>dispatch(setEndDate(endDate)),
    sortByDate:()=>dispatch(sortByDate()),
    sortByAmount:()=>dispatch(sortByAmount())
})
export default connect(mapStateToProps,mapDisptchToProps)(ExpenseListFilters);