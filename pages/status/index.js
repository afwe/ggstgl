import React from 'react';
import {Card} from 'antd';
export default class Status extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            mostFunctional: '',
            leastFunctional: '',
            characterFunctional: [],
            visitList: [],
            commentList: []
        }
    }
    setStatus = async function(){

    }
    componentDidMount(){
        this.setStatus();

    }
    render(){
        const {mostFunctional, leastFunctional, characterFunctional, visitList, commentList} = this.state;
        return(
            <div>
                <Card>

                </Card>
                <Card>

                </Card>
                {
                    this.characterFunctional.map((item,index)=>{
                        return(
                            <Cad>
                                {item.characterId}
                            </Cad>
                        )
                    })
                }
                <div>
                    <Card>
                        {visitList}
                    </Card>
                </div>
                {
                    this.commentList.map((item,index)=>{
                        return (
                            <Card>
                                
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}