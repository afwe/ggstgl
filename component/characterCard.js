import { Component } from 'react';
import { getCharacterById } from '../fetch/character';
import thisStyle from '../styles/characterCard.module.scss';
import Router from 'next/router'
import { message } from 'antd';
import { useEffect } from 'react';
export default function CharacterCard(props){
    const { characterId, characterName, characterImg} = props;
    const linkTo = (id) => {
        console.log("?");
        Router.push({pathname: '/characterInfo',query: {
          id: id
        }})
      }
    return(
        <div alt="chipp" className = {thisStyle.backGround} onClick = {()=>{linkTo(characterId)}}>
            <div>
                <img  src={`http://localhost:8880/`+characterImg}></img>
            </div>
        </div>
    )
}