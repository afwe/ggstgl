import React,{useState, useEffect} from 'react';
import { Card, Avatar, Modal } from 'antd';
const { Meta } = Card;
import { login, regester, checkLogin, checkRole, register } from '../fetch/user';
import { handleErrRes } from '../util/handleErrRes';
import { MehFilled, HomeFilled, FrownFilled } from '@ant-design/icons';
import LoginPanel from './loginPanel';
import { connect } from 'react-redux';
import { setuserid } from '../redux/actions/user';
import next from 'next';

const Usercard=(props)=>{
    const {userid, setuserid} = props;
    const [userId, setUserId] = useState(userid);
    const [avatar, setAvatar] = useState('https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png');
    const [isSigned, setIsSigned] = useState(false);
    const [callLogin, setCallLogin] = useState(false);
    const name='未登录';
    useEffect(()=>{
        if(userid=='未登录'){
            checkLogin().then(response=>{
                if(response.code==200){
                  setuserid(response.userId);
                } else{
                  handleErrRes(response);
                }
            })
        }else{
            setUserId(userid);
        }
        
    },[userid]);
    const hideLogin = ()=>{
        setCallLogin(false);
    }
    const showLogin = ()=>{
        console.log(userId);
        setCallLogin(true);
    }
    return (
        <React.Fragment>
            <Card
                actions={
                    !isSigned? [
                        <MehFilled key="login" onClick={()=>showLogin()}/>,
                    ] : [
                        <HomeFilled  key="home" />,
                        <FrownFilled  key="logout" />
                    ]
                }
                style={{width:500, height: 500}}
                {...props}
                >
                    <Meta
                        avatar={<Avatar src={avatar}/>}
                        title={userId}
                        description={'hh'}
                    />
            </Card>
            <Modal
                centered
                visible={callLogin}
                onOk={() => hideLogin()}
                onCancel={() => hideLogin()}
                width={500}
            >
                    <LoginPanel />
            </Modal>
        </React.Fragment>
    )
    
}
const mapStateToProps = state=>{
    return {userid:state.user.userId};
}
const mapDispathToProps = {
    setuserid
}
export default connect(mapStateToProps, mapDispathToProps)(React.memo(Usercard));