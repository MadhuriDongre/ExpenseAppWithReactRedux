import { login, logout } from '../../actions/auth'

test('should generate Login Action Object',()=>{
    const uid='hwgu7ter7236823768237823'
    const action=login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
});

test('should generate Logout Action Object',()=>{
    const action=logout();
    expect(action).toEqual({
        type:'LOGOUT'
    })
});