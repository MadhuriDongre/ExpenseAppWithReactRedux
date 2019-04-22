import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItem =({description,amount,createdAt,id})=>(
    <div>
        <h2><Link to={`/edit/${id}`}>{description}</Link></h2>
        <p> {<span>&#x20B9;</span>}{ numeral(amount).format('0,0[.]00') } -- {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default ExpenseListItem;