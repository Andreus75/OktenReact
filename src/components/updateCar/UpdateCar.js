import {useEffect, useState} from "react";
import {getCars, updateCar} from "../../services/carService";

export default function UpdateCar() {

    let [cars, setCars] = useState([]);
    let [checkId, setCheckId] = useState('');
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    let handleChange = (e) => {
        const id_t = e.target.value;
        let id = Number(id_t);
        let fCar = cars.find(value => value.id === id);
        let {model, price, year} = fCar;
        setCheckId(fCar.id);
        setModel(model);
        setPrice(price);
        setYear(year);
    }
    const updateCarModel = (e) => {
        setModel(e.target.value);
    }
    const updateCarPrice = (e) => {
      setPrice(e.target.value);
    }
    const updateCarYear = (e) => {
      setYear(e.target.value);
    }

    const update_Car = () => {
      let carInfo = {model, price, year};
      updateCar(carInfo, checkId);
    }
    return (
        <div>
            <div>
                    <select onChange={handleChange}>
                        {cars.map(value =>
                            <option name="value" value={value.id}>
                                {value.id}. {value.model} - {value.price}. {value.year}
                            </option>
                        )}
                    </select>
            </div>

            <div>
                <form onSubmit={update_Car}>
                    <input type="text" name={'model'} value={model} onInput={updateCarModel}/>
                    <input type="number" name={'price'} value={price} onInput={updateCarPrice}/>
                    <input type="number" name={'year'} value={year} onInput={updateCarYear}/>
                    <button>Edit car</button>
                </form>

            </div>
        </div>
    );
}