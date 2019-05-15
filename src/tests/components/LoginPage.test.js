import React from 'react';
import { shallow } from 'enzyme';
import  { LoginPage }  from '../../components/LoginPage';

let startLoginWithGoogle,startLoginWithFacebook,startLoginWithTwitter,wrapper;
beforeEach(()=>{
    startLoginWithGoogle = jest.fn()
    startLoginWithFacebook = jest.fn()
    startLoginWithTwitter = jest.fn()
    wrapper=shallow(<LoginPage 
        startLoginWithGoogle={startLoginWithGoogle} 
        startLoginWithFacebook={startLoginWithFacebook}
        startLoginWithTwitter={startLoginWithTwitter}
        />)
})
test('should render Login page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoginWithGoogle on button click',()=>{
    wrapper.find('button').at(3).simulate('click');
    expect(startLoginWithGoogle).toHaveBeenCalled();
});

test('should call startLoginWithFacebook on button click',()=>{
    wrapper.find('button').at(4).simulate('click');
    expect(startLoginWithFacebook).toHaveBeenCalled();
});

test('should call startLoginWithTwitter on button click',()=>{
    wrapper.find('button').at(5).simulate('click');
    expect(startLoginWithTwitter).toHaveBeenCalled();
});
