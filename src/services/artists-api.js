import { getToken } from '../utilities/users-service'

const BASE_URL = '/api/artists';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
  }

export function create(artist) {
    const token = getToken();
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
        body: JSON.stringify(artist)
    }).then(res => res.json());
}

export function update(artist) {
    const token = getToken();
    return fetch(`${BASE_URL}/${artist._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
        body: JSON.stringify(artist) 
    }).then(res => res.json());
}

export function deleteOne(id) {
    const token = getToken();
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${token}`, }
    }).then(res => res.json());
}