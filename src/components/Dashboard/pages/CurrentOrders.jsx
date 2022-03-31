import React, {useEffect, useState} from 'react';
import axios from "axios";

const CurrentOrders = () => {
    const [orders, setOrders] = useState({})

    useEffect(() => {
        axios
            .get('https://himinfo.net/cl/test/api/')
            .then(response => {
                setOrders(response.data)
            })
    }, [])

    return (
        <>
            <div className='current-orders'>
                <h1>Текущие заказы</h1>
            </div>

            <div style={{justifyContent: 'center', alignItems: 'center'}}>
                <h4 style={{marginTop: '50px', marginLeft: '360px'}}>Всё, что возвращает API</h4>
                <div style={{marginTop: '20px', marginLeft: '290px'}}>
                    error: {orders.error},
                    messages: {orders.Msg}
                </div>
            </div>
        </>
    );
};

export default CurrentOrders;