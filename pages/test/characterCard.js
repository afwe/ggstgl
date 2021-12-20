import { Component } from 'react';
import { getCharacterById } from '../../fetch/character';
import thisStyle from '../../styles/characterCard.module.scss';
import { message } from 'antd';
import { useEffect } from 'react';
export default function CharacterCard(props){
    const { characterId } = props;
    let response;
    useEffect(()=>[
        getCharacterById({id:characterId})
        .then(res=>{
            response = res;
        })
        .catch((err)=>{
            message.error('请求错误');
        })
    ])
    
    //const { characterName, characterImg } = response;
    const characterImg = "../../public/testImg.png";
    return(
        /*<div className={thisStyle.test}>

        </div>*/
        <div alt="chipp" className = {thisStyle.backGround}>
            <div>
                <img  src={`http://localhost:8880/testImg.png`}></img>
            </div>
        </div>
    )
}