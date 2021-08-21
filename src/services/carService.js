let url = 'http://91.201.233.14/api/v1/cars';

let getCars = () => {
    return fetch(url)
        .then(value => value.json());
}

const createCar = (car) => {
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

export {getCars, createCar}