import { backendPort } from "./config"

//url, timeout, method, recv, data

export default async function theFetch(props){
    let {url, timeout, method, recv, data = ''} = props;
    let header = {};
    if(! (data.name === 'FormData')){
        header["Accept"] = "application/json";
        header["Content-Type"] = "application/json";
    }
    url = backendPort[recv] + url;
    let requestConfig = {
        credentials: 'include',
        method: method,
        headers: header,
        mode: "cors",
        cache: "force-cache",
    };
    if(method === 'POST' || method === 'PUT'){
        if (data.name === 'FormData') {
            Object.defineProperty(requestConfig, "body", {
                value: data,
            });
        } else {
            Object.defineProperty(requestConfig, "body", {
                value: JSON.stringify(data),
            });
        }
    } else if(method === 'GET'){
        if(url.indexOf("?") != -1) url += '&';
        else url += '?';
        let nowTime = new Date().getTime().toString();
        url=url+`time=${nowTime.substr(nowTime.length-6, 6)}`;
    }

    let timeoutFunc = (ms)=>{
        return new Promise((reject)=>{
            setTimeout(()=>{
                reject(new Response('{"status": 408, "message": "请求超时", "data": null}', {
                    ok: false,
                    status: 408,
                    url: url,
                }));
            }, ms);
        });
    };

    let fetchFunc = ()=>{
        return fetch(url, requestConfig)
        .then((response)=>{
            return response;
        })
        .catch((err)=>{
            return new Response(
                '{"status": -1, "message": "请求失败:' +
                  err +
                  '", "data": null}',
                {
                  ok: false,
                  status: 500,
                  url: url,
                }
              );
        });
    }
    const retJson = Promise.race([
        fetchFunc(),timeoutFunc(timeout)
    ]).then((response)=>{
        return response.json();
    })
    return retJson;
}