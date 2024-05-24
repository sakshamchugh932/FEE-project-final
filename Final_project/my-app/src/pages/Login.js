import { useState } from 'react';
import './sign_style.css';
import Header from '../componenet/Header';
import Navbar from '../componenet/Navbar';
import Footer1 from '../componenet/Footer1';
import Footer from '../componenet/Footer';
const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Email ', email);
        console.log('Password', Password);
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Header/>
            <Navbar/>
            <div className='container-fluid bg-image'>
                <div className='row'>
                    <div className='col-sm-12'><br /></div>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                    <br/>
                    </div>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-12'><br /></div>
                </div>


                <form onSubmit={handleSubmit}>
                <div className="row p-5 pt-2">
                        <div className='col-sm-3'></div>
                            <div className="col-sm-6 p-2 pb-3"><br/></div>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-3'></div>
                            <div className="col-sm-6 p-2"></div>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-3'></div>
                            <div className="col-sm-6 p-3 pt-5 pb-5 log">
                            <div className='row'>
                                <div className='col-sm-4'></div>
                                <div className='col-sm-4'>
                                    <img src={require("../images/login.png")}/>
                                </div>
                                <div className='col-sm-4'></div>
                            </div>
                                <br/><br/>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className='form-control'
                                    placeholder="Email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                                <br/>
                                <br/>
                                <input
                                    id="Password"
                                    name="Password"
                                    type="Password"
                                    className='form-control'
                                    placeholder="Password"
                                    value={Password}
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />
                                <br/>
                                <br/>
                                <p>Already have an Account? <a href="/SignUp">Sign Up</a></p>
                            </div>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-3'></div>
                            <div className="col-sm-6 p-2">
                                
                            </div>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-8'>
                                
                            </div>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-7'></div>
                            <div className='col-sm-5'>
                                <button className="butto" type="submit">Login</button>
                            </div>
                        </div>
                </form>
            </div>
            <Footer1/>
            <Footer/>
        </>
    );
};

export default Login;
