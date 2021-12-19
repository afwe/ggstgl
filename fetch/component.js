import theFetch from './index';
//{id:xxx}
export const getComponentById = (data)=> theFetch({url: 'component/get', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const deleteComponentById = (data) => theFetch({url: 'component/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateComponent = (data) => theFetch({url: 'component/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getAllComponent = () => theFetch({url:'component/getAll', timeout:1000, recv: 'nestjs', method: 'GET'});