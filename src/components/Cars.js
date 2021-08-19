import {useEffect, useState} from "react";
import {getCars} from "../services/carService";
import Car from "./Car";

export default function Cars ({url}) {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars(cars).then(value => setCars(value));
    })


    switch (url) {
        case 'even':
            return cars.filter(value => value.model.length % 2 === 0).map(value => <div><Car key={value.key}
                                                                                             car={value}/></div>);
            break;
        case 'odd':
            return cars.filter(value => value.model.length % 2 !== 0).map(value => <div><Car key={value.key}
                                                                                             car={value}/></div>);
            break
        default :
            <h3>Text</h3>;
    }








    //
    // switch (url) {
    //     case 'even':
    //         return cars.filter(value => value.model.length % 2 === 0).map(value => <div>
    //             <h3>{value.id} {value.model}</h3>
    //         </div>)
    //     case 'odd':
    //         return cars.filter(value => value.model.length % 2 !== 0).map(value => <div>
    //             <h3>{value.id} {value.model}</h3>
    //         </div>)
    //     default:
    //         return <h1>Something text</h1>
    // }
}