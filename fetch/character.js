import theFetch from './index';
//{id:xxx}
export const getCharacterById = (data)=> theFetch({url: 'character/get', timeout: 500, data: data, recv: 'nestjs', method:'GET'});

export const deleteCharacterById = (data) => theFetch({url: 'character/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateChracter = (data) => theFetch({url: 'character/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getAllCharacter = () => theFetch({url:'character/getAll', timeout:1000, recv: 'nestjs', method: 'GET'});