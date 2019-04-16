import filtersReducer  from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
 const state=filtersReducer(undefined,'@@INIT');
 expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
 })
});