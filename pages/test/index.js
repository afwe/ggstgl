import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Global.module.scss'
import {DatePicker, Button, message} from 'antd';  // 加载 JS
import React from 'react';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getAllCharacter } from '../../fetch/character';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: []
    };
    this.uploadCfg = {
      name: 'file',
      action: 'http://localhost:8881/character/img',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    }
  }
  componentDidMount(){
    let self = this;
    getAllCharacter().then(response=>{
      if(response.code == 200){
        self.setState({
          characterList: response.data
        });
      } else{
        message.error('角色列表请求失败');
      }
    }).catch(err=>{
      message.error('角色列表请求失败');
    })
  }
  render(){
    console.log(this.state.characterList);
    return (
      <div className = {styles.test}>
        <Upload {...this.uploadCfg}>
          <Button icon={<UploadOutlined />}>test</Button>
        </Upload>
        <Button type="primary">test</Button>
        <DatePicker />
        {
          this.state.characterList.map((item,index)=>{
            return(
              <div key={index}>{item.characterName}</div>
            )
          })
        }
      </div>
    )
  }
}

