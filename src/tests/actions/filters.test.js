import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters';
import moment from 'moment'

test('should generate set startDate action objects',()=>{
    expect(setStartDate(moment(0))).toEqual({type:'SET_START_DATE', startDate:moment(0)})
});

test('should generate set endDate action objects',()=>{
    expect(setEndDate(moment(0))).toEqual({type:'SET_END_DATE', endDate:moment(0)})
});

test('should generate set textfilter action objects',()=>{
    expect(setTextFilter('rent')).toEqual({type:'SET_TEXT_FILTER', text:'rent'})
});

test('should generate set textfilter action objects with default values',()=>{
    expect(setTextFilter()).toEqual({type:'SET_TEXT_FILTER', text:''})
});

test('should sort action objects by date',()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
});

test('should sort action objects by amount',()=>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})