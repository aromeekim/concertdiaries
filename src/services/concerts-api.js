const BASE_URL='/api/artists/concerts';

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