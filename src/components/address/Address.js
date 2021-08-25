import Geo from "../geo/Geo";

export default function Address ({address: {street, suite, city, zipcode}}) {

    // let {street, suite, city, zipcode} = address;
    console.log('address'+ street);
    return (
        <div>
            Address :
            {/*Street : {street}*/}
            {/*Suite : {suite}*/}
            {/*City : {city}*/}
            {/*Zipcode : {zipcode}*/}
            {/*<Geo geo={geo}/>*/}
        </div>
    );
}