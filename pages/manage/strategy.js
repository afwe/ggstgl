import React, { useState, useEffect, useRef} from 'react';
import style from '../../styles/manage.module.scss';
import {Input, Select, Button, Card, message} from 'antd';
import Markdown from '../../component/markdown';
const { TextArea } = Input;
const { Option } = Select;
import { getAllCharacter } from '../../fetch/character';
import { updateStrategy } from '../../fetch/strategy';
import { updateCommit } from '../../fetch/commit';
const Manage = function(){
    const [strategyText, setStrategyText] = useState('');
    const [characterId, setCharacterId] = useState();
    const [opponentId, setOpponentId] = useState();
    const [characterList, setCharacterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        getCharacterList()
    }, [])
    const changeText = (e)=>{
        setStrategyText(e.target.value);
    }
    const getCharacterList = async function(){
        let response = await getAllCharacter();
        setIsLoading(false);
        setCharacterList(response.data);
        setCharacterId(response.data[0].characterId);
        setOpponentId(response.data[0].characterId);
    }
    const uploadStrategy = async function(){
        /*let response = await updateStrategy({
            characterId: characterId,
            opponentId: opponentId,
            strategyDescription: strategyText
        });*/
        let response = await updateCommit({
            characterId: characterId,
            opponentId: opponentId,
            strategyDescription: strategyText,
            type: 1
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
                onChange={(e)=>setCharacterId(e)}
                className={style.select}
                key={characterId}
                defaultValue={characterId}
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
                                >
                                    {item.characterName}
                                </Option>
                    )})
                }
            </Select>
            <Select 
                onChange={(e)=>setOpponentId(e)}
                className={style.select}
                key={"versus"}
                defaultValue={"versus"}
                loading={isLoading}
                style={{width: 120}} 
            >{
                    characterList.map(
                        (item,index)=>{
                            return (
                                <Option
                                    value={item.characterId}
                                    key={"Ooption-"+index}
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
                <Markdown>{strategyText}</Markdown>
            </Card>
            <Button onClick={uploadStrategy}>
                上传攻略
            </Button>
        </div>
    )
} 
export default React.memo(Manage);