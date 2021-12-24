import React, { useEffect, useState } from 'react';
import { Button, Tag, Table, Space, Modal, message} from 'antd';
import { getAllCommit, resolveCommit, rejectCommit} from '../../fetch/commit';
import { handleErrRes } from '../../util/handleErrRes';
import { connect } from 'react-redux';
import { getAllCharacter } from '../../fetch/character';
import ComponentCard from '../../component/componentCard';
import Markdown from '../../component/markdown';
const columns = [
    {        
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        render: text=><a>{text}</a>
    },
    {
        title: '类型',
        dataIndex: 'commitType',
        key: 'commitType',
        render: type=>{
            return (
                type==0? 
                <Tag color={'volcano'} key='tag'>{'套路'}</Tag> :
                <Tag color={'geekblue'} key='tag'>{'对策'}</Tag>
            )
        }
    },
    {
        title: '角色',
        dataIndex: 'characterId',
        key: 'characterId',
    },
    {
        title: '预览',
        dataIndex: 'preview',
        key: 'preview',
        render: (text, record)=>{
            return(
                <Button onClick={()=>Preview(record.commitDescription)}>
                    查看预览
                </Button>
            )
        }
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record)=>{
            return(<Space size="middle">
                <Button onClick={()=>{resolve(record.commitId)}}>resolve</Button>
                <Button onClick={()=>{reject(record.commitId)}}>reject</Button>
            </Space>
            ) 
        }
    }
];
let Preview = ()=>{};
let resolve = () =>{};
let reject = ()=> {};
const Master = (props)=>{
    const userId = props.userid;    
    const [data, setData] = useState();
    const [preview, setPreview] = useState('11111');
    const [showPreview, setShowPreview] = useState(false);
    useEffect(()=>{
        rendCommitList()
        .then(response=>getCharacterList(response))
        .catch(err=>{
            console.log(err);
        });
    }, []);
    const getCharacterList = async function(responsedata){
        let response = await getAllCharacter();
        let finalData = [];
        if(response.code == 200){
            responsedata.forEach((element, index)=>{
                finalData.push({
                    ...element,
                    key: `tableitem-${index}`,
                    id: element.characterId,
                    characterId:response.data[response.data.map((item)=>{return item.characterId}).indexOf(element.characterId)].characterName
                })
            })
            setData(finalData);
        } else {
            handleErrRes(response);
        }
    }
    const rendCommitList = async function(){
        let response = await getAllCommit();
        if(response.code==200){
            return response.data;
        } else{
            handleErrRes(response);
        }
    };
    resolve = async function(id){
        let response = await resolveCommit({
            commitId: id
        });
        if(response.code==200){
            console.log(response);
            message.success('放行成功');
        } else{
            handleErrRes(response);
        }
    }
    reject = async function(id){
        let response = await rejectCommit({
            commitId: id
        });
        if(response.code==200){
            message.success('拒绝成功');
        } else{
            handleErrRes(response);
        }
    }
    
    Preview = (newText)=>{
        setPreview(newText);
        setShowPreview(true);
    };
    const hidePreview = () =>{
        setShowPreview(false);
    }
    return(
        <React.Fragment>
            <Table
                columns={columns}
                pagination={{ position: ['bottomRight'] }}
                dataSource={data}
            />
            <Modal
                centered
                visible={showPreview}
                onOk={() => hidePreview()}
                onCancel={() => hidePreview()}
                width={500}
            >
                <Markdown>
                    {preview}
                </Markdown>
            </Modal>
        </React.Fragment>
    )
}
const mapStateToProps = state=>{
    return {userid:state.user.userId};
}
const mapDispathToProps=()=> {
    return{};
}
export default connect(mapStateToProps, mapDispathToProps)(React.memo(Master));