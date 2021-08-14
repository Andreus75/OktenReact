import Geo from "../geo/Geo";

export default function Address ({address: {street, suite, city, zipcode,geo}}) {
    return (

        <div>
            <h3>Address : </h3>
            <ul>
                <li>sity : {city}, street : {street}</li>
                <li>suite : {suite}</li>
                <li>zipcode : {zipcode}</li>
                <Geo geo={geo}/>
            </ul>
        </div>
    );
}