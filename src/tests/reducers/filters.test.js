import filtersReducer  from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
 const state=filtersReducer(undefined,'@@INIT');
 expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
 })
});

test('should set sortby to amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortby to amount',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state=filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});

test('should set textfilter',()=>{
    const text="this is my text"
    const state=filtersReducer(undefined,{type:'SET_TEXT_FILTER',text});
    expect(state.text).toBe(text);
});

test('should set startDate',()=>{
    const startDate=moment(0)
    const state=filtersReducer(undefined,{type:'SET_START_DATE',startDate});
    expect(state.startDate).toBe(startDate);
});

test('should set endDate',()=>{
    const endDate=moment(0)
    const state=filtersReducer(undefined,{type:'SET_END_DATE',endDate});
    expect(state.endDate).toBe(endDate);
});