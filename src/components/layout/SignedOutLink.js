import React from 'react'
import { NavLink } from "react-router-dom";

export const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/'>Register</NavLink></li>
        </ul>
    )
}
