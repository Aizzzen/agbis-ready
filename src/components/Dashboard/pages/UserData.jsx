import React from 'react';

const UserData = () => {
    return (
        <div className='home'>
            <form style={{fontSize: '25px'}}>
                <h1>Данные о пользователе</h1>
                <div className="form-group">
                    <label>Имя</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder={localStorage.getItem('Имя').replace(/"/g,"")}
                    />
                </div>
                <div className="form-group">
                    <label>Дата рождения</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Введите дату своего рождения'
                    />
                </div>
                {/*<div></div>*/}
                <div className="form-group">
                    <label>Адрес</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Введите свой адрес'
                    />
                </div>
                <div className="form-group">
                    <label>Телефон</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder={localStorage.getItem('Логин').replace(/"/g,"")}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder={localStorage.getItem('Email').replace(/"/g,"")}
                    />
                </div>
            </form>
        </div>
    );
};

export default UserData;