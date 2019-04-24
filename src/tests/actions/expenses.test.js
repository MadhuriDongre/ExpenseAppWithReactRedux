import {addExpense,editExpense,removeExpense,startAddExpense,setExpense, startSetExpense, startRemoveExpense, startEditExpense} from '../../actions/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore =configureMockStore([thunk]);

beforeEach((done)=>{
    const expenseData ={};
    expenses.forEach(({id, description,amount,note,createdAt})=>{
        expenseData[id]={description,amount,note,createdAt}
    })
    database.ref('expenses').set(expenseData).then(()=>done())
})

test('remove Expense Action Object',()=>{
    const action=removeExpense({id:'12'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'12'
    })
});

test('should remove expense from firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({id}))
    .then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy;
        done();
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

test('should edit expense from firebase',(done)=>{
    const store = createMockStore({});
    const updates = {amount:100};
    const id = expenses[0].id;
    store.dispatch(startEditExpense(id,updates))
    .then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            id,
            type:'EDIT_EXPENSE',
            updates
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(100);
        done();
    });
});

test('add Expense Action Object',()=>{
    const action=addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
});

test('should add expense to db and store',(done)=>{
   const store = createMockStore({});
   const expenseData = { description:'rent',note:'this is rent',amount:3000, createdAt:13274928};
   store.dispatch(startAddExpense(expenseData))
   .then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})

test('should add expense to db and store with default values',(done)=>{
    const store = createMockStore({});
    const expenseDefault = { description:'',note:'',amount:0, createdAt:0};
    store.dispatch(startAddExpense({}))
    .then(()=>{
            const action = store.getActions();
            expect(action[0]).toEqual({
                type:'ADD_EXPENSE',
                expense:{
                    id:expect.any(String),
                    ...expenseDefault
                }
            });
            return database.ref(`expenses/${action[0].expense.id}`).once('value');
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
        });
});

test('should setup set expense action object with data',()=>{
    const action=setExpense(expenses[2]);
    expect(action).toEqual({
        type:'SET_EXPENSE',
        expenses:expenses[2]
    })
});

test('should fetch expenses from firebase',(done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpense())
    .then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'SET_EXPENSE',
            expenses
        });
        done();
    });
});