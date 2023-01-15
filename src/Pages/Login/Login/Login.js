import React from 'react';
import './Login.css';
import Navigation from '../../Home/Navigation/Navigation/Navigation';
import Form from 'react-bootstrap/Form';

const Login = () => {
    // error state
    const [error, setError] = React.useState(undefined);
    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // signInWithEmailAndPassword(email, password)
        // request object
        const reqObj = {
            username: email,
            pass: password
        }
        try {
            const res = await fetch(`http://localhost:5000/user/login`, {
                method: "POST",
                body: JSON.stringify(reqObj),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await res.json();
            console.log(result)
            if (res.status === 200) {
                // set token
                localStorage.setItem('token', result.success.token);
                localStorage.setItem('user', result.success.user);
                window.location.href = "/dashboard";
                setError("")
            } else {
                console.log(result);
                // show password/user invalid error
                setError(result.errors.msg);
            }
        } catch (err) {
            // show network error
            console.log(err);
            setError(err);
        }
    };
    return (
        <div>
            <Navigation />
            <div className="row login pb-5">
                <div className="col-lg-12 bg2 mb-5">
                    <div className="login_form_div">
                        <div>
                            <h3 className="mt-5 mb-4 text-center">LIBRARY STUDENT LOGIN FORM</h3>

                            <form onSubmit={handleSubmit} className="loginform">
                                <div className="mb-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control text-light"
                                        placeholder="Enter email"
                                        name='email'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control text-light form_input_design"
                                        placeholder="Enter password"
                                        name='password'
                                    />
                                </div>
                                {
                                    error &&
                                    <p className='text-danger '>{error}</p>
                                }
                                <Form.Control className='btn btn-primary' type="submit" value="LOGIN" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;