import React,{useEffect, useState} from 'react';
import CharacterCard from '../../component/characterCard';
import { Card, message } from 'antd';
import { getStrategy } from '../../fetch/strategy';
import StrategyCard from '../../component/strategyCard';
import LazyLoad from 'react-lazyload';
import { getAllCharacter } from '../../fetch/character';
import style from '../../styles/strategy.module.scss';
//import Router from 'next/router';
const Strategy = function(){
    const [ characterId, setCharacterId ] = useState(29);
    const [ opponentId, setOpponentId ] = useState(27);
    const [ characterList, setCharacterList ] = useState([]);
    const [ opponentList, setOpponentList ] = useState([]);
    useEffect(()=>{
        getCharacterList()
    }, [])
    const getCharacterList = async function(){
        let response = await getAllCharacter();
        setCharacterList(response.data);
    }
    const changeOpponent = async function(id){
        setOpponentId(id);
        let response = await getStrategy(
            {
                characterId: characterId,
                opponentId: id
        });
        if(response.code === 200){
            setOpponentList(response.data);
        } else{
            message.error('获取对策失败');
        }
    }
    return (
        <div className={style.Container}>
            <Card className={style.character} 
                cover={<img className={style.img} alt="example" src={`http://localhost:8880/${characterId - 27}.png`} />}
            />
            <Card className={style.opponent}
                cover={<img className={style.img} alt="example" src={`http://localhost:8880/${opponentId - 27}.png`} />}
            />
            <div className={style.opponentList}>
                {   
                    characterList.map((item, index)=>{
                        if(item.characterId !== opponentId && item.characterId !== characterId){
                            return (
                                <CharacterCard 
                                    {...item} key={index} 
                                    onClick={()=>changeOpponent(item.characterId)} 
                                />
                            )  
                        }
                    })
                }
            </div>
            {   
                opponentList.map((item,index)=>{
                    return(
                        <LazyLoad className={style.strategyCard} key={`component-${index}`}>
                            <StrategyCard 
                                strategyId={1}
                                className={style.cardComponent} 
                            />
                        </LazyLoad>
                    )
                })
            }
        </div>
    )
}
export default React.memo(Strategy);