import React from 'react';
import {  Link } from 'react-router-dom';

const NotFoundPage =()=>(
    <div>
        This path does not exist. <Link to="/">Go to Dashboard</Link>
    </div>
);

export default NotFoundPage;