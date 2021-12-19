import React from 'react'
import { Card, Affix, Skeleton} from 'antd';
import Markdown from '../../component/markdown';
import style from '../../styles/characterinfo.module.scss';
import ComponentCard from '../../component/componentCard';
import LazyLoad from 'react-lazyload';
export default class Characterinfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            characterInfo: [],
            characterNeutral: '# 这是标题\n' +
            ' <http://localhost:8880/1.png> [` M `]`RGBA(0,255,0,0.3)` arkdown + E [ **ditor** ] = **Mditor**  \n' +
            '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
             '**这是加粗的文字**\n\n' +
            '*这是倾斜的文字*`\n\n' +
            '***这是斜体加粗的文字***\n\n' +
            '~~ 这是加删除线的文字 ~~ \n\n'+
            '\`console.log(Hello World)\` \n\n'+
            '```  const a=2; ```',
            good: [
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
            ],
            bad: [ 
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
                {
                    characterName: 'sol'
                },
            ],
            newutral: '',
            componentsList: [
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
                {
                    content: 'cunquan'
                },
            ]
        }
    }
    render(){
        const { characterInfo, componentsList, good, bad, characterNeutral} = this.state;
        return(
            <div className={style.container}>
                <Card className={style.characterNeutral}>
                    <Markdown>
                        {characterNeutral}
                    </Markdown>
                </Card>
                <Card className={style.affix}>
                    <Markdown>
                        {characterNeutral}
                    </Markdown>
                </Card>
                <Card title="有利" className={style.goodCard}>
                    {
                        good.map((item, index)=>{
                            return(
                                <div key={index}>{item.characterName}</div>
                            )
                        })
                    }
                </Card>
                <Card title="不利" className={style.badCard}>
                    {
                        bad.map((item, index)=>{
                            return (
                                <div key={index}>{item.characterName}</div>
                            )
                        })
                    }
                </Card>
                <React.Fragment>
                {
                    componentsList.map((item,index)=>{
                        return (
                            <LazyLoad className={style.componentCard}>
                            <ComponentCard 
                                key={`component-${index}`} 
                                className={style.cardComponent} 
                            />
                            </LazyLoad>
                        )
                    })
                }
                </React.Fragment>
            </div>
        )
    }
} 