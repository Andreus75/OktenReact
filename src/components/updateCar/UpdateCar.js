import {useEffect, useState} from "react";
import {getCars} from "../../services/carService";

export default function UpdateCar() {

    let [cars, setCars] = useState([]);
    let [carEdit, setCarEdit] = useState({});
    let [model, setModel] = useState('');

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    const selectCar = (e, value) => {
        e.preventDefault();
        console.log(value);
        console.log(e.target.value);
    };

    let handleChange = (e) => {
        const id_t = e.target.value;
        let id = Number(id_t);
        let fCar = cars.filter(value => value.id === id);
        console.log(fCar);
        let {model, price, year} = fCar;
fCar.map(value => <div>{value.model}</div>)
        setModel(model);

        console.log(typeof  fCar.model);
        console.log(price);
        console.log(year);
    }
    // console.log(carEdit);

    return (
        <div>
            <div>
                {/*<form onSubmit={selectCar}>*/}
                    <select onChange={handleChange}>
                        {cars.map(value =>
                            <option name="value" value={value.id}>
                                {value.id}. {value.model} - {value.price}. {value.year}
                            </option>
                        )}
                    </select>
                    <button>ENter</button>
                {/*</form>*/}
            </div>

            <div>
                <form>
                    <input type="text" name={'model'} value={model}/>
                    <input type="number" name={'price'}/>
                    <input type="number" name={'year'}/>
                    <button>Edit car</button>
                </form>

            </div>
        </div>
    );
}