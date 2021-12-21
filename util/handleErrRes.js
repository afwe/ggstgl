import { message } from 'antd';
export const handleErrRes = (res)=>{
    console.log(res);
    const errMesage;
    switch(res.code){
        case(404): 
            errMessage = '未找到接口';
            break;
        case(500):
            errMessage = '查询错误';
            break;
        default:
            errMessage = '请求数据错误';
            break;
    }
    message.error(errMesage);
}