//Higher order Component (HOC) 
//reuse code
//render hijacking
//props manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>(
    <div>
        <h1> Info </h1>
        <p>The Info is : {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is private Info. Please don't disclose it</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication =(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated?<WrappedComponent {...props}/>:<p> Please login to view the Info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info ="Info is rendered using props"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info ="Info is rendered using props"/>, document.getElementById('app'));