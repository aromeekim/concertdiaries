const BASE_URL = '/api/artists';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
  }

export function create(artist) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artist)
    }).then(res => res.json());
}

export function update(artist) {
    return fetch(`${BASE_URL}/${artist._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artist) 
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
}