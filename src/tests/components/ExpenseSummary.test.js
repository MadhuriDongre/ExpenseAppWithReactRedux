import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';

test('should render expense list with expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={200}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list without expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});