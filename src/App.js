import React, {useState} from 'react';
import {AuthContext} from "./components/context";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

const App = () => {
    const[isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;