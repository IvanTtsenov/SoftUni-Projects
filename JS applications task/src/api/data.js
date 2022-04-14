import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
}


export async function createGame(game) {
    return api.post('/data/games', game)
}

export async function getGameById(id) {
    return api.get('/data/games/' + id);
}

export async function deleteById(id) {
    return api.del('/data/games/' + id);
}

export async function editGame(id,meme) {
    return api.put('/data/games/' + id,meme);
}

export async function getGames() {
    return api.get(`/data/games?sortBy=_createdOn%20desc&distinct=category`);
}