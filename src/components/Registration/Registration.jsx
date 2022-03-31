import React, {useState} from 'react';
import './Registration.css';
import Login from "./Login";
import {Alert} from "react-bootstrap";

const Registration = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !email || !userName || !password) {
            setFlag(true)
        } else {
            setFlag(false)
            localStorage.setItem('Имя', JSON.stringify(name))
            localStorage.setItem('Email', JSON.stringify(email))
            localStorage.setItem('Логин', JSON.stringify(userName))
            localStorage.setItem('Пароль', JSON.stringify(password))

            console.log('Сохранено в localStorage')
            setLogin(!login)
        }
    }

    const handleClick = () => {
        setLogin(!login)
    }

    return (
        <div className="outer">
            <div className="inner">
                <div className='p-4'>
                    {login ? (
                    <form onSubmit={handleSubmit}>
                        <h2>Регистрация</h2>
                        <div className="form-group">
                            <label>Имя</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Введите своё имя'
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Введите свою почту'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Логин</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Придумайте себе логин'
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Придумайте пароль'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-dark btn-lg btn-block' type='submit'>Зарегистрироваться</button>

                        <p className='forgot-password text right' onClick={handleClick}>Уже зарегестрированы?</p>

                        {flag && (
                            <Alert color='primary' variant='danger'>
                                Заполните все поля!
                            </Alert>
                        )}

                    </form>
                    ) : (
                        <Login/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Registration;