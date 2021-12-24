import thisStyle from '../styles/characterCard.module.scss';
export default function CharacterCard(props){
    const { characterId, characterName, characterImg, onClick} = props;
    return(
        <div alt={characterName} className = {thisStyle.backGround} onClick = {()=>{onClick()}}>
            <div>
                <img  src={characterImg}></img>
            </div>
        </div>
    )
}