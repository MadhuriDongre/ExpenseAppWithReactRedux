import totalExpense from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses',()=>{
    const result=totalExpense([]);
    expect(result).toEqual(0)
});

test('should return total correctly for single expense',()=>{
    const result=totalExpense([expenses[0]]);
    expect(result).toEqual(24)
});

test('should return total correctly if single expense present',()=>{
    const result=totalExpense(expenses);
    expect(result).toEqual(2161)
});