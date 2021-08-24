import {useEffect, useState} from "react";
import {getCars} from "../../services/carService";

export default function UpdateCar () {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    const selectCar = (e, value) => {
        e.preventDefault();
        console.log(value);
        console.log(e.target.value);
    };

        let handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(e.currentTarget.value);
    }

    return (
        <div>
            <div>
                <form onSubmit={selectCar}>
                    <select onChange={handleChange}>
                        {cars.map(value =>
                            <option name="value" value={value}>
                                {value.id}. {value.model} - {value.price}. {value.year}
                             </option>
                        )}
                    </select>
                    <button>ENter</button>
                </form>
            </div>

            <div>
                <form>
                    <input type="text" name={'model'}/>
                    <input type="number" name={'price'}/>
                    <input type="number" name={'year'}/>
                    <button>Edit car</button>
                </form>

            </div>
        </div>
    );
}