import Geo from "../geo/Geo";

export default function Address ({address: {street, suite, city, zipcode, geo: {lat, lng}}}) {
    return (
        <div>
            <h3>Address :</h3>
            <ul>
                <li>street : {street}</li>
                <li>suite : {suite}</li>
                <li>city : {city}</li>
                <li>zipcode : {zipcode}</li>
                <li><Geo lat={lat} lng={lng}/></li>
            </ul>
        </div>
    );
}