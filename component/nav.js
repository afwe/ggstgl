import React from 'react';
import { Menu } from 'antd';
import style from '../styles/nav.module.scss';
export default class Navbar extends React.Component{
    state = {
        current: 'main',
    };
    handleClick = e => {
        console.log('click', e);
        this.setState({ current: e.key });
    }
    render(){
        const { current } = this.state;
        return(
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" 
            className={style.nav}>
                <Menu.Item key="main">
                    内容
                </Menu.Item>
                <Menu.Item key="disscuss">
                    讨论
                </Menu.Item>
                <Menu.Item key="manage">
                    管理
                </Menu.Item>
            </Menu>
        )
    }
}