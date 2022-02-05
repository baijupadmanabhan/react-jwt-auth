import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "name" : name,
                "email" : email,
                "password" : password
             })
        };

        const response = await fetch(
            'http://localhost:8000/register', requestOptions
        );

        const content = await response.json();

        console.log("Output of register")
        console.log(content)
        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return ( 
        <div>
            <main className="form-register">
                <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="userName" className="form-control" id="floatingInput" placeholder="name"
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                </form>
            </main>
        </div>
     );
}

export default Register;