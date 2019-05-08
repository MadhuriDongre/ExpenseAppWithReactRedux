import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItem =({description,amount,createdAt,id})=>(
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h2 className="list-item__title">{description}</h2>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h2 className="list-item__data"><span>&#x20B9;</span>{ numeral(amount).format('0,0[.]00') }</h2>
        </Link>
);

export default ExpenseListItem;