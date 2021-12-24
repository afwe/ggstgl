import theFetch from './index';
//{id:xxx}
export const getCommitById = (data)=> theFetch({url: 'commit/get', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const deleteCommitById = (data) => theFetch({url: 'commit/delete', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const updateCommit = (data) => theFetch({url: 'commit/update', timeout: 500, data: data, recv: 'nestjs', method: 'POST'});

export const getAllCommit = () => theFetch({url:'commit/getAll', timeout:1000, recv: 'nestjs', method: 'GET'});

export const resolveCommit = (data) => theFetch({url:'commit/resolve', timeout:1000, data: data, recv: 'nestjs', method: 'POST'});

export const rejectCommit = (data) => theFetch({url:'commit/reject', timeout:1000, data: data, recv: 'nestjs', method: 'POST'});