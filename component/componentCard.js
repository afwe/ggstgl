import React,{ useEffect, useState } from 'react';
import { Card, Skeleton} from 'antd';
import { getComponentById } from '../fetch/component'; 
import Markdown from './markdown';

const ComponentCard = function(props){
    const { componentId, className } = props;
    const [ content, setContent ] = useState('');
    const [ loading, setLoading ] = useState(true);
    useEffect(()=>{
        getComponentData();
    }, [])  
    const getComponentData = async function(){
        let response = await getComponentById({componentId: 1});
        setContent(response.data.componentDescription);
        setLoading(false);
    }
    return (
        <Card className={className}>
            <Skeleton loading={loading} active >
                <Markdown>
                    {content}
                </Markdown>
            </Skeleton>
        </Card>
    )
}

export default React.memo(ComponentCard);
