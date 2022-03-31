import React from "react";
import {
    ClearOutlined, DollarCircleOutlined,
    MessageOutlined,
    OrderedListOutlined, TransactionOutlined,
    UnorderedListOutlined,
    UserOutlined
} from "@ant-design/icons";

export const SidebarData = [
    {
        title: 'Личный кабинет',
        path: '/',
        icon: <UserOutlined />,
        cName: 'nav-text'
    },
    {
        title: 'Сообщения',
        path: '/messages',
        icon: <MessageOutlined />,
        cName: 'nav-text'
    },
    {
        title: 'Текущие заказы',
        path: '/current-orders',
        icon: <OrderedListOutlined />,
        cName: 'nav-text'
    },
    {
        title: 'История заказов',
        path: '/order-history',
        icon: <UnorderedListOutlined />,
        cName: 'nav-text'
    },
    {
        title: 'Акции',
        path: '/actions',
        icon: <TransactionOutlined />,
        cName: 'nav-text'
    },
    {
        title: 'Прейскурант',
        path: '/pricelist',
        icon: <DollarCircleOutlined />,
        cName: 'nav-text'
    },
    {
        title: 'Приемные пункты',
        path: '/points',
        icon: <ClearOutlined />,
        cName: 'nav-text'
    },
]