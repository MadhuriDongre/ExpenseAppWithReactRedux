import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('remove Expense Action Object',()=>{
    const action=removeExpense({id:'12'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'12'
    })
});

test('edit Expense Action Object',()=>{
    const action=editExpense('12',{note:'new note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'12',
        updates:{note:'new note value'}
    })
});

test('add Expense Action Object',()=>{
    const expenseData={description:'rent',amount:'20',note:'add note',createdAt:231312};
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{...expenseData,id:expect.any(String)}
    })
});

test('add Expense Action Object',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{description:'',amount:0,note:'',createdAt:0,id:expect.any(String)}
    })
})