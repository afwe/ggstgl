import React, {useState, useEffect} from 'react';
import { Card, Pagination } from 'antd';
import {getUser} from '../fetch/user';
import UserCard from '../component/userCard';
const User = ()=>{
    useEffect(getUserInfo(), []);
    const [user,setUser] = useState({});
    const [messageList, setMessageList] = useState([]);
    const { pageSize, currentPage } = { pageSize: 6, currentPage: 1};
    const getUserInfo = async function(){
        let response = getUser();
        if(response.code==200){
            setUser(response.data);
            response = getUserMessage();
            if(response == 200){
                setMessageList(response.data);
            } else{

            }
        } else{

        }
    }
    const changePage = (newPage)=>{

    }
    return(
        <div>
            <UserCard>

            </UserCard>
            <div>消息列表</div>
            {
                messageList.map((item,index)=>{
                    if(index>(currentPage-1)*pageSize&&index<currentPage*pageSize){
                        return (
                            <Card>

                            </Card>
                        )
                    }
                })
            }
            <Pagination 
                pageSize={6}
                simple defaultCurrent={1} total={messageList.length}
                onChange={(e)=>changePage(e)}
                />
        </div>
        
    )
}
export default React.memo(User);