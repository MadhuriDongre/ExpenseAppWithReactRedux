import authReducer from '../../reducers/auth';

test('should set uid for login',()=>{
    const action={
        type:'LOGIN',uid:'jdbfi78w6r283rwegr8347yr'
    }
    const state=authReducer({},action);
    expect(state.uid).toEqual(action.uid)
});

test('should clear uid for logout',()=>{
    const action={
        type:'LOGOUT'
    }
    const state=authReducer({uid:'wer234234234'},action);
    expect(state.uid).toEqual()
});