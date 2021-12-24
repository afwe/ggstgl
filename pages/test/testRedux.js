import { useState } from 'react';
import { connect } from 'react-redux';
import { setInfo } from '../../redux/actions/main';

function test(props){
    console.log(props);
    const {name, setInfo}=props;
    const [newName,setName]=useState('');
    return(
        <div>
            <input value={newName} onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=>setInfo(newName)}>test</button>
        </div>
    )
}
const mapStateToProps = state=>{
    return {name:state.main.name};
}
const mapDispatchToProps={
    setInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(test);