import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header =({startLogout})=>(
    <header>
        <h1>Expensify</h1>
            <NavLink activeClassName="isActive" to="/dashboard" exact>Dashboard</NavLink>
            <NavLink activeClassName="isActive" to="/create">Create Expense</NavLink>
            <button onClick={startLogout}>LogOut</button>
    </header>
);

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
})
export default connect(undefined,mapDispatchToProps)(Header);