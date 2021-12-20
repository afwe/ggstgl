import theFetch from ".";

export const getStrategyById = (data)=> theFetch({url: 'strategy/get', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const deleteStrategyById = (data) => theFetch({url: 'strategy/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateStrategy = (data) => theFetch({url: 'strategy/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getStrategy = (data) => theFetch({url:'strategy/getByCharacterId', timeout:1000, data: data, recv: 'nestjs', method: 'POST'});