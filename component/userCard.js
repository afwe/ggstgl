import React from 'react';
import { Card, Avatar, message } from 'antd';
const { Meta } = Card;
import { login, regester, checkLogin, checkRole, register } from '../fetch/user';
import { handleErrRes } from '../util/handleErrRes';
export default class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            sign: '未登录',
            name: '未登录'
        }
    }
    doLogin = async function(){
        let response = await login({userId: this.userId, userPwd: this.userPwd});
        if(response.code==200){

        } else{
            handleErrRes(response);
        }
    }
    doRegister = async function(){
        let response = await register({userId: this.userId, userPwd: this.userPwd});
        if(response.code == 200){

        } else{
            handleErrRes(response);
        }
    }

    render(){
        const { name, sign, avatar } = this.state;
        return (
            <Card
                actions={[

                ]}
                style={{width:500, height: 500}}
                {...this.props}
                >
                    <Meta
                        avatar={<Avatar src={avatar}/>}
                        title={name}
                        description={sign}
                    />
            </Card>
        )
    }
}