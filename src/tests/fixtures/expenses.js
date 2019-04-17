import moment from 'moment';

export default [{
    id:'1',
    description:"Gum",
    note:'',
    amount:24,
    createdAt:0
},{
    id:'2',
    description:"rent",
    note:'',
    amount:2124,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description:"coffee",
    note:'',
    amount:13,
    createdAt:moment(0).add(4,'days').valueOf()
}];