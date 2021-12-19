import styles from '../styles/Global.module.scss'
import {message, Card, Divider} from 'antd';  // 加载 JS
import React from 'react';
import { getAllCharacter } from '../fetch/character';
import CharacterCard from '../component/characterCard';
import 'antd/dist/antd.css';
import Markdown from '../component/markdown';
const { Meta } = Card;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      markdownTest:'# 这是标题\n' +
      ' <http://localhost:8880/1.png> [` M `]`RGBA(0,255,0,0.3)` arkdown + E [ **ditor** ] = **Mditor**  \n' +
      '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
       '**这是加粗的文字**\n\n' +
      '*这是倾斜的文字*`\n\n' +
      '***这是斜体加粗的文字***\n\n' +
      '~~ 这是加删除线的文字 ~~ \n\n'+
      '\`console.log(Hello World)\` \n\n'+
      '```  const a=2; ```'
    };
  }
  componentDidMount(){
    let self = this;
    getAllCharacter().then(response=>{
      if(response.code == 200){
        self.setState({
          characterList: response.data
        });
      } else{
        console.log(response);
        message.error('角色列表请求失败');
      }
    }).catch(err=>{
      message.error('err角色列表请求失败');
    })
  }
  render(){
    return (
      <div className = {styles.mainContainer}>
        <Card 
          title="Guilty Gear -Strive- is a new series within the Guilty Gear franchise. Strive features characters based on the cast of Xrd and XX, but redesigned for the new series. "
          className = {styles.shadowCard + " " + styles.titleCard}
        >
          <Markdown >
            Our intent first and foremost in making this game is to create something entirely new, rather than a continuation of previous games. This includes our direction with the music and designs as well. The reason for changing the character designs is that it makes it clear at a single glance that this is a new series within the Guilty Gear franchise. We aren't using previous titles as a base when thinking about changing the characters' moves. We are redefining each character from the ground up for this new game. 
          </Markdown>
          <Meta
              description="~ Daisuke Ishiwatari on Developer Blog 2"
            />
        </Card>
        <Card title="角色列表" style={{textAlign:"center"}} className={styles.shadowCard + " " +styles.listCard}>
          <div className = {styles.characterlist}>
            {
              this.state.characterList.map((item,index)=>{
                return(
                  <CharacterCard {...item} key={index}></CharacterCard>
                )
              })
            }
          </div>
          <Divider/>
          <Markdown>
            {this.state.markdownTest}
          </Markdown>
        </Card>
        <Card  title="文章" className={styles.shadowCard + " " + styles.describeCard}>
          <Markdown >{this.state.markdownTest}</Markdown>
        </Card>
      </div>
    )
  }
}

