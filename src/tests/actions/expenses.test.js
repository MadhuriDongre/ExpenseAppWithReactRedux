import {addExpense,editExpense,removeExpense,startAddExpense} from '../../actions/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore =configureMockStore([thunk])

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
})