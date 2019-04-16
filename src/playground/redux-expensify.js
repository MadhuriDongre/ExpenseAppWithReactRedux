import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense=({ description='',note='',amount=0, createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        amount,
        createdAt,
        description,
        note
    }
});
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});
const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
});

const sortByAmount =()=>({
    type:'SORT_BY_AMOUNT'
});

const sortByDate =()=>({
    type:'SORT_BY_DATE'
});

const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
});

const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState =[];
const expenseReducer =(state= expenseReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXPENSE':
            console.log(action)
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {...expense, ...action.updates}
                }
                else{
                    return expense;
                }
            })
        default: 
            return state;
    }
};
const filtersReducerDefaultState ={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy:'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy:'date'};
        case 'SET_START_DATE':
            return {...state, startDate:action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate:action.endDate};
        default: 
            return state;
    }
};

const getVisibleExpenses=(expenses, {text, sortBy, startDate, endDate})=>{

    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate!== 'number'|| expense.createdAt>=startDate;
        const endDateMatch = typeof endDate!== 'number'|| expense.createdAt<=endDate;
        // const textMatch = expense.description.toLowerCase().indexOf(text.toLowerCase())>-1;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;
        }
        if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1 ;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
});

const expenseOne = store.dispatch(addExpense({description:"rent",amount:100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:"coffee",amount:10,createdAt:-300}));
const expenseThree = store.dispatch(addExpense({description:"coffee(iced)",amount:20,createdAt:400}));
const expenseFour = store.dispatch(addExpense({description:"tea",amount:10,createdAt:-200}));
// store.dispatch(editExpense(expenseTwo.expense.id,{description:"coffee(iced)",amount:20}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));

store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('Re'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(-500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(500));

const demoState={
    expenses:[{
        id:'ueteuwtruew',
        amount:2137,
        createdAt:0,
        description:"rent",
        note:'this the rent for thr month of JAN'
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', //amount or date
        startDate:undefined,
        endDate:undefined
    }
};
