import React,{ useState, useEffect} from 'react'
import { Card, Affix, Skeleton} from 'antd';
import Markdown from '../../component/markdown';
import style from '../../styles/characterinfo.module.scss';
import ComponentCard from '../../component/componentCard';
import LazyLoad from 'react-lazyload';
import Router, {useRouter} from 'next/router';
import { getAllComponent } from '../../fetch/component';
import { handleErrRes } from '../../util/handleErrRes';
const  Characterinfo = (props) => {
    const router = useRouter();
    const characterId= router.query.id;
    const characterInfo= [];
    const characterNeutral = '# 这是标题\n' +
        ' <http://localhost:8880/1.png> [` M `]`RGBA(0,255,0,0.3)` arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
            '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~ 这是加删除线的文字 ~~ \n\n'+
        '\`console.log(Hello World)\` \n\n'+
        '```  const a=2; ```';
    const good= [
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
    ];
    const bad= [ 
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
    ];
    const newutral= '';
    const [componentsList, setComponentList] = useState([]);
    useEffect(()=>{
        getComponentList();
    }, []);
    const getComponentList = async ()=>{
        let response = await getAllComponent();
        if(response.code==200){
            setComponentList(response.data);
        } else{
            handleErrRes(response);
        }
    }
    const linkTo = (id) => {
        Router.push({pathname: '/opponent',query: {
          id: id
        }})
    };
    return(
        <div className={style.container}>
            <Card className={style.characterNeutral} onClick={()=>linkTo(characterId)}>
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
                        <LazyLoad className={style.componentCard} key={`component-${index}`}>
                            <ComponentCard 
                                componentId={item.componentId}
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

export default Characterinfo;