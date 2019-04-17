// import ReactSwallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly',()=>{
    // const renderer = new ReactSwallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot()
})
