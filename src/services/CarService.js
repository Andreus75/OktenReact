let url = 'http://195.72.146.25/api/v1/cars';

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

const deleteCar = (carId) => {
    fetch(url + '/' + carId, {
        method: 'DELETE',
    }).then(r => r.json());
}

let getCars = () => {
    return fetch(url)
        .then(value => value.json());
}

export {saveCar, deleteCar, getCars }