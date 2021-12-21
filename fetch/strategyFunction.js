import theFetch from ".";

export const getStrategyFunctionById = (data)=> theFetch({url: 'strategyFunction/get', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const deleteStrategyFunctionById = (data) => theFetch({url: 'strategyFunction/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateStrategyFunction = (data) => theFetch({url: 'strategyFunction/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getStrategyFunction = (data) => theFetch({url:'strategyFunction/getByCharacterId', timeout:1000, data: data, recv: 'nestjs', method: 'POST'});