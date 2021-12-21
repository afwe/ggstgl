import theFetch from ".";

export const getComponentFunctionById = (data)=> theFetch({url: 'componentFunction/get', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const deleteComponentFunctionById = (data) => theFetch({url: 'componentFunction/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateComponentFunction = (data) => theFetch({url: 'componentFunction/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getComponentFunction = (data) => theFetch({url:'componentFunction/getByCharacterId', timeout:1000, data: data, recv: 'nestjs', method: 'POST'});