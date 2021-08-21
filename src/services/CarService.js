let url = 'http://195.72.144.67/api/v1/cars';
// 195.72.146.25/

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

const updateCar = (car) => {
    fetch(url + '/' + car.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {getCars, saveCar, carDelete, updateCar}