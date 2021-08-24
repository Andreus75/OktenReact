import {useEffect, useState} from "react";
import {getCars} from "../services/carService";
import Car from "./Car";

export default function Cars ({url}) {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars(cars).then(value => setCars([...value]));
    },[])

    switch (url) {
        case 'even':
            return cars.filter(value => value.model.length % 2 === 0).map(value => <div><Car key={value.id}
                                                                                             car={value}/></div>);
        case 'odd':
            return cars.filter(value => value.model.length % 2 !== 0).map(value => <div><Car key={value.id}
                                                                                             car={value}/></div>);
        default :
            <h3>Text</h3>;
    }

    return (
        <div>
            {
                cars.map(value => <Car key={value.id} car={value}/>)
            }
        </div>
    );
}