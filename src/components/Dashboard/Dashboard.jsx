import React, {useContext, useState} from 'react';
import './Dashboard.css';
import {Link} from "react-router-dom";
import {CloseOutlined, ImportOutlined, MenuOutlined} from "@ant-design/icons";
import {SidebarData} from "./SidebarData";
import {AuthContext} from "../context";

const Dashboard = () => {
    const {setIsAuth} = useContext(AuthContext)

    const[sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <MenuOutlined onClick={showSidebar} style={{color: '#ff2b1a', marginBottom: '15px', marginLeft: '45px'}} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <CloseOutlined style={{color: '#ff2b1a', marginTop: '25px'}} />
                        </Link>
                    </li>
                    <div className="nav-menu-textt">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </div>
                    <div className='nav-text'>
                        <p onClick={() => setIsAuth(false)} className='p-button-back'>
                            <Link to='/'>
                                <ImportOutlined />
                                <span>Выход</span>
                            </Link>
                        </p>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Dashboard;