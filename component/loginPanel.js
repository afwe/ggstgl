import React, { useState, useRef, useEffect } from 'react';
import { Form, Radio, Input, Button, message } from 'antd';
import { login, register } from '../fetch/user';
import { connect } from 'react-redux';
import { setUserId } from '../redux/actions/user';
import { handleErrRes } from '../util/handleErrRes';
const Login = (props)=>{
    const {setUserId} = props;
    const [form]=Form.useForm();
    const [type, setType] = useState(0);
    const formRef = useRef();
    const doLogin = async function(){
        const userId = formRef.current.getFieldValue('userId');
        const userPwd = formRef.current.getFieldValue('userPwd');
        let response = await login({
            userId:userId,
            userPwd:userPwd
        });
        console.log(response);
        if(response.code==200){
            setUserId(response.data.userId);
            message.success('登录成功');
        } else{
            handleErrRes(response);
        }

    }
    const doRegister = async function (){
        const userId = formRef.current.getFieldValue('userId');
        const userPwd = formRef.current.getFieldValue('userPwd');
        let response = await register({
            userId:userId,
            userPwd:userPwd
        });
        if(response.code==200){
            message.success('注册成功');
        } else{
            handleErrRes(response);
        }
    }
    return(
        
        <Form
            ref={formRef}
            form={form}
            layout="vertical"
        >
            <Form.Item label="Required Mark" name="requiredMarkValue">
                <Radio.Group>
                <Radio.Button onClick={()=>{setType(0)}}>登录模式</Radio.Button>
                <Radio.Button onClick={()=>{setType(1)}}>注册模式</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item name='userId' label="UserId" tooltip="输入用户Id">
                <Input placeholder="用户Id" />
            </Form.Item>
            <Form.Item name='userPwd' label="UserPassword" tooltip="输入用户密码">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
                <Button 
                    type="primary"
                    onClick={type==0?()=>doLogin():()=>doRegister()}
                >{type==0?"登录":"注册"}</Button>
            </Form.Item>
        </Form>
    )
}
const mapStateToProps = ()=>{
    return {}
}
const mapDispathToProps = {
    setUserId
}
export default connect(mapStateToProps, mapDispathToProps)(React.memo(Login));