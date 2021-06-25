import React from 'react'
import { NavLink } from "react-router-dom";

export const SignedInLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Create New Project</NavLink></li>
            <li><NavLink to='/auth/logout'>Logout</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}
