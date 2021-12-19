export function getAllPostIds(){
    return [
        {
            params:{
                id:'1'
            }
        }
    ]
}

export function getPostData(id){
    return{
        id: id
    }
}

export async function getDetail(id){
    let response = await fetch('http://localhost:8880/getRooms',{
        method: 'get'
    });
    let res = await response.json();
    return res;
}