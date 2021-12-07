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

export async function updateWish(data) {
    return await sendRequest(baseURL, "PUT", data)
}

export async function deleteWish() {
    return await sendRequest(baseURL, "DELETE")
}

