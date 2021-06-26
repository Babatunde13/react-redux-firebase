import React from 'react'
import { NavLink } from "react-router-dom";

export const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/auth/register'>Register</NavLink></li>
            <li><NavLink to='/auth/login'>Login</NavLink></li>
        </ul>
    )
}
