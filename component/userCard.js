import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;
export default class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            sign: '未登录',
            name: '未登录'
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