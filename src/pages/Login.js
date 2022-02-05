import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({updateName}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ 
                "email" : email,
                "password" : password
             })
        };

        const response = await fetch(
            'http://localhost:8000/login', requestOptions
        );

        const content = await response.json();

        console.log("output of login")
        console.log(content)

        async function getUserdetails(content) {
            if ( content.message === 'success' ) {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({})
                };
          
                const response = await fetch(
                    'http://localhost:8000/user', requestOptions
                );
          
                const userData = await response.json();
                
                console.log("Output of get user details")
                console.log(userData)

                updateName(userData.name)
            }
        };

        getUserdetails(content)
        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <main className="form-signin">
                <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}
 
export default Login;
