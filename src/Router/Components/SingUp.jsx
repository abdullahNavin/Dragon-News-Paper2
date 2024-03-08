import React from 'react';
import { auth } from '../../../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/Provider';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const SingUp = () => {
    // const { users, setUsers } = useContext(AuthContext)
    // console.log(users);

    // const location = useLocation()
    // console.log(location);


    const handleSingUp = e => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                // setUsers(user)

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSingUp} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">sign up</button>
                        </div>
                    </form>
                    <p className='text-center pb-1'>Alrady have an account <Link className='text-green-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;