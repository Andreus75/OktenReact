import {useEffect, useState} from "react";
import {getCars, saveCar} from "../services/CarService";
import Car from "./Car";

export default function CarForm () {

    let [formState, setFormState] = useState({model: '', price: 0, year: 0});
    let [cars, setCars] = useState([]);

    let onFormCarInputChange = (e) => {
      setFormState({...formState, [e.target.name]: e.target.value});
    };

    let save = (e) => {
        e.preventDefault();
        saveCar(formState);
    }

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, []);

    return (
        <div>
            <form onSubmit={save}>
                <h3>Add car</h3>
                <p>input the model</p>
                <input type="text" name={'model'} value={formState.model} onInput={onFormCarInputChange} maxLength={20}/>
                <br/>
                <p>input price</p>
                <input type="number" name={'price'} value={formState.price} onInput={onFormCarInputChange}  min={0}/>
                <br/>
                <p>input year</p>
                <input type="number" name={'year'} value={formState.year} onInput={onFormCarInputChange} min={1990} max={2021}/>
                <br/>
                <input type="submit"/>

            </form>
            <div>
                {
                    cars.map(value => <Car key={value.id} car={value}/>)
                }
            </div>
        </div>
    );
}