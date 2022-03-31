import React, {useContext, useState} from 'react';
import {Alert} from "react-bootstrap";
import Home from "./Home/Home";
import {Link} from "react-router-dom";
import {AuthContext} from "../context";


const Login = () => {

    const {setIsAuth} = useContext(AuthContext)

    const [userNameLog, setUserNameLog] = useState('')
    const [passwordLog, setPasswordLog] = useState('')
    const [flag, setFlag] = useState(false)
    const [home, setHome] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()
        let usName = localStorage.getItem('Логин').replace(/"/g,"")
        let pass = localStorage.getItem('Пароль').replace(/"/g,"")

        if(!userNameLog || !passwordLog) {
            setFlag(true)
            console.log('Пустые поля')
        } else if(userNameLog !== usName || passwordLog !== pass) {
            setFlag(true)
        } else {
            setHome(!home)
            setFlag(false)
            setIsAuth(true)
        }
    }

    return (
        <div>
            {home ? (
            <form onSubmit={handleLogin}>
                <h2>Авторизация</h2>
                <div className="form-group">
                    <label>Логин</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Введите свой логин'
                        onChange={e => setUserNameLog(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Введите свой пароль'
                        onChange={e => setPasswordLog(e.target.value)}
                    />
                </div>
                <button className='btn btn-dark btn-lg btn-block' type='submit'>
                    Войти
                </button>

                {flag && (
                    <Alert color='primary' variant='danger'>
                        Заполните поля корректно!
                    </Alert>
                )}
            </form>
            ) : (
                <Link to='/dashboard' style={{textDecoration: 'none', color: 'black'}}><Home/></Link>
            )}
        </div>
    );
};

export default Login;