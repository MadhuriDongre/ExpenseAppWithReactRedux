import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filter, altFilter } from '../fixtures/filters';
import moment  from 'moment';

let setTextFilter, sortByAmount, sortByDate,setEndDate,setStartDate,wrapper;
beforeEach(()=>{
    setTextFilter=jest.fn()
    sortByAmount=jest.fn()
    sortByDate=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    wrapper=shallow(
    <ExpenseListFilters
        filters={filter}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
})

test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',()=>{
    wrapper.setProps({filters:altFilter})
    expect(wrapper).toMatchSnapshot();
});

test('should handle text Change correctly',()=>{
    const value="rent"
    wrapper.find('input').simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortbyDate correctly',()=>{
    const value="date"
    wrapper.setProps({filters:altFilter})
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sortbyAmount correctly',()=>{
    const value="amount"
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date Change correctly',()=>{
    const startDate = moment(0);
    const endDate = moment(0).add(4,'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle text focus Change correctly',()=>{
    const focused= 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
    expect(wrapper.state('focused')).toBe(focused);
});