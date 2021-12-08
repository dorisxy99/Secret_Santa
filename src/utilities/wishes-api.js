import {sendRequest} from './users-api';

const baseURL = "/api/wishes";

export async function createWish(data) {
    return await sendRequest(`${baseURL}/create`, "POST", data)
}

export async function getAll() {
    return await sendRequest(baseURL)
}

export async function myWishes() {
    return await sendRequest(`${baseURL}/my`)
}

export async function updateWish(wish) {
    console.log('API', wish)
    return await sendRequest(`${baseURL}/${wish._id}`, "PUT", wish)
}

export function deleteWish(id) {
    return sendRequest(`${baseURL}/${id}`, 'DELETE');
}