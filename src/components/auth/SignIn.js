import React, {useState} from 'react'

const SignIn = () => {
    const [signInData, setSignInData] = useState({email: '', password: ''})
    const submit = e => {
        e.preventDefault();
    }
    const handleChange =e => {
        const {id, value} = e.target
        setSignInData({...signInData, [id]: value})
        console.log(signInData)
    }
    return (
        <div className="container">
            <form className="white" onSubmit={submit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
