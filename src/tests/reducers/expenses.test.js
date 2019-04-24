import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state=expensesReducer(undefined,'@@INIT');
    expect(state).toEqual([])
});

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',id:'2'
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('should not remove expenses if id not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',id:'27'
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});

test('should edit expense by id',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'2',
        updates:{
            amount:21,
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state[1].amount).toEqual(action.updates.amount)
});

test('should not edit expenses if id not found',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'27',
        updates:{
            amount:21,
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});

test('should add expense',()=>{
    const action={
        type:'ADD_EXPENSE',
        expense:{
            amount:20,
            description:"ice tea"
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state.length).toEqual(4);
    expect(state).toEqual([...expenses , action.expense])
});

test('should set expenses',()=>{
    const action={
        type:'SET_EXPENSE',
        expenses:[expenses[1]]
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]])
});