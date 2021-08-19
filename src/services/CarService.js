let url = 'http://195.72.146.25/api/v1/cars';

let getCars = () => {
    return fetch(url)
        .then(value => value.json());
}

const saveCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const carDelete = (id) => {
    fetch(url +  '/' + id, {
        method: 'DELETE',
    });
}

export {getCars, saveCar, carDelete}