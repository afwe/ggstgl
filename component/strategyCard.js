import React,{ useEffect, useState } from 'react';
import { Card, Skeleton} from 'antd';
import { getStrategyById } from '../fetch/strategy'; 
import Markdown from './markdown';

const StrategyCard = function(props){
    const { strategyId, className } = props;
    const [ content, setContent ] = useState('');
    const [ loading, setLoading ] = useState(true);
    useEffect(()=>{
        getStrategyData();
    }, [])  
    const getStrategyData = async function(){
        let response = await getStrategyById({strategyId: strategyId});
        setContent(response.data.strategyDescription);
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

export default React.memo(StrategyCard);
