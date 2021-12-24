import theFetch from './index';
//{id:xxx}
export const getMailById = (data)=> theFetch({url: 'mail/get', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const deleteMailById = (data) => theFetch({url: 'mail/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateMail = (data) => theFetch({url: 'mail/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getAllMail = () => theFetch({url:'mail/getAll', timeout:1000, recv: 'nestjs', method: 'GET'});

export const readMail = () => theFetch({url:'mail/read', timeout:1000, recv: 'nestjs', method: 'POST'});