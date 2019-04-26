// import ReactSwallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout,wrapper;
beforeEach(()=>{
    startLogout=jest.fn(),
    wrapper = shallow(<Header startLogout={startLogout}/>);
})
test('should render Header correctly',()=>{
    expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot()
});

test('should call startLogout on button click',()=>{
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
