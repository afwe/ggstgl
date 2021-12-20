import React, { useState, useEffect, useRef} from 'react';
import style from '../../styles/manage.module.scss';
import {Input, Select, Button, Card, message} from 'antd';
import Markdown from '../../component/markdown';
const { TextArea } = Input;
const { Option } = Select;
import { getAllCharacter } from '../../fetch/character';
import { updateComponent } from '../../fetch/component';
const Manage = function(){
    const [componentText, setComponentText] = useState('');
    const {CharacterId, setCharacterId} = useState(0);
    const [characterList, setCharacterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [select, setSelect] = useState();
    useEffect(()=>{
        getCharacterList()
    }, [])
    const changeText = (e)=>{
        setComponentText(e.target.value);
    }
    const getCharacterList = async function(){
        let response = await getAllCharacter();
        setIsLoading(false);
        setCharacterList(response.data);
        setSelect(response.data[0].characterId)
    }
    const uploadComponent = async function(){
        let response = await updateComponent({
            characterId: select,
            componentDescription: componentText
        });
        if(response.code==200){
            message.success('发布成功');
        }else{
            message.error('发布失败');
        }
    }
    return(
        <div className={style.Container}>
            <Select 
                onChange={(e)=>setSelect(e)}
                className={style.select}
                key={select}
                defaultValue={select}
                loading={isLoading}
                style={{width: 120}} 
            >
                {
                    characterList.map(
                        (item,index)=>{
                            return (
                                <Option
                                    value={item.characterId}
                                    key={"option-"+index}
                                    onSelect={(e)=>setCharacterId(e)}
                                >
                                    {item.characterName}
                                </Option>
                    )})
                }
            </Select>
            <TextArea 
                className={style.input}
                placeholder="剪辑攻略" 
                autoSize = {{ maxRows: 5}}
                onChange={(e)=>changeText(e)}
            />
            <Card className={style.preview}>
                <Markdown>{componentText}</Markdown>
            </Card>
            <Button onClick={uploadComponent}>
                上传攻略
            </Button>
        </div>
    )
} 
export default React.memo(Manage);