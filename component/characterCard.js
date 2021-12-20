import thisStyle from '../styles/characterCard.module.scss';
export default function CharacterCard(props){
    const { characterId, characterName, characterImg, onClick} = props;
    return(
        <div alt="chipp" className = {thisStyle.backGround} onClick = {()=>{onClick()}}>
            <div>
                <img  src={`http://localhost:8880/`+characterImg}></img>
            </div>
        </div>
    )
}