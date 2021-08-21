import {useEffect, useState} from "react";
import {carDelete, getCars, saveCar} from "../services/CarService";
import Car from "./Car";

export default function CarsForm () {

    let [cars, setCars] = useState([]);

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');


    useEffect(() => {
        return getCars()
            .then(value => setCars([...value]))
    },[])

    function onCarModelChange(e) { setModel(e.target.value); }

    function onCarPriceChange(e) { setPrice(e.target.value); }

    function onCarYearChange(e) {  setYear(e.target.value); }

    let save = () => {
            let car = {model, price, year};
            saveCar(car);
    }

    let deleteCar = (id) => {
        carDelete(id);
        let filterCarsArray = cars.filter(value => value.id !== id);
        setCars([...filterCarsArray]);
    }

    
    let editCar = (car) => {
        setModel(car.model);
        setPrice(car.price);
        setYear(car.year);
    }
    return (
        <div>

            <form onSubmit={save}>
                <h3>Form for save car</h3>
                <p>Input model</p>
                <input type="text" name={'model'} value={model} onChange={onCarModelChange} maxLength={20} placeholder={''}/>
                <p>Input price</p>
                <input type="number" name={'price'} value={price} onChange={onCarPriceChange} min={0}/>
                <p>Input year</p>
                <input type="number" name={'year'} value={year} onChange={onCarYearChange} min={1990} max={2021}/>
                <br/>
                <button className={'save_car'} onClick={saveCar}>Save car</button>
                {/*<button className={'edit_car'} onClick={editCar}>Edit car</button>*/}
            </form>
            {
                cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} editCar={editCar}/>)
            }
        </div>
    );
}