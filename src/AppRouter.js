import React, {useContext} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Dashboard from "./components/Dashboard/Dashboard";
import UserData from "./components/Dashboard/pages/UserData";
import Messages from "./components/Dashboard/pages/Messages";
import CurrentOrders from "./components/Dashboard/pages/CurrentOrders";
import {AuthContext} from "./components/context";
import OrderHistory from "./components/Dashboard/pages/OrderHistory";
import Actions from "./components/Dashboard/pages/Actions";
import Pricelist from "./components/Dashboard/pages/Pricelist";
import Points from "./components/Dashboard/pages/Points";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return(
              isAuth
                ? (
                      <div className="App">
                        <Dashboard/>
                            <Routes>
                                <Route path='/' element={<UserData/>} />
                                <Route path='/messages' element={<Messages/>} />
                                <Route path='/current-orders' element={<CurrentOrders/>} />
                                <Route path='/order-history' element={<OrderHistory/>} />
                                <Route path='/actions' element={<Actions/>} />
                                <Route path='/pricelist' element={<Pricelist/>} />
                                <Route path='/points' element={<Points/>} />
                            </Routes>
                        </div>
                  )
                : (
                      <div className="App">
                        <Routes>
                            <Route path='/' element={<Registration/>} />
                        </Routes>
                        </div>
                  )
    )
}

export default AppRouter;
