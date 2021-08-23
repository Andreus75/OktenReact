import {useState} from "react";
import {createCar} from "../../services/carService";

export default function CreateCar () {

    let [model, setModel] = useState('');
    let [price, setPrice] = useState({});
    let [year, setYear] = useState({});

    function onModelInput(e) {
        setModel(e.target.value);
    }
    function onPriceInput(e) {
        setPrice(e.target.value);
    }
    function onYearInput(e) {
        setYear(e.target.value);
    }

    const saveNewUser = (e) => {
        e.preventDefault();
        let car = {model, price, year};
        createCar(car);
    }

    return (
        <div>
            <form onSubmit={saveNewUser}>
                <h3>Add new car</h3>
                <p>Input model</p>
                <input type="text" name={'model'} value={model} onInput={onModelInput}/>
                <p>Input price</p>
                <input type="number" name={'price'} value={price} onInput={onPriceInput}/>
                <p>Input year</p>
                <input type="number" name={'year'} value={year} onInput={onYearInput}/>
                <br/>
                <button>Create car</button>
            </form>
        </div>
    );
}