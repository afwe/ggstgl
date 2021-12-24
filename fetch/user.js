import theFetch from ".";

export const login = (data)=> theFetch({url: 'user/login', timeout: 1000, data: data, recv: 'nestjs', method:'POST'});

export const register = (data) => theFetch({url: 'user/register', timeout: 500, data: data, recv: 'nestjs', method:'POST'});

export const checkLogin = (data) => theFetch({url: 'user/check', timeout: 1000, data: data, recv: 'nestjs', method: 'GET'});

export const checkRole = (data) => theFetch({url: 'user/checkRole', timeout: 1000, data: data, recv: 'nestjs', method: 'POST'});
