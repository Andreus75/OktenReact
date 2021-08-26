import Geo from "../geo/Geo";

export default function Address ({address}) {
    // let {street, suite, city, zipcode} = address;
    // console.log({address});
    console.log(address);
    return (
        <div>
            Address :
            {address &&  <div>
                Street : {address.street}
                Suite : {address.suite}
                City : {address.city}
                Zipcode : {address.zipcode}
                {/*<Geo geo={geo}/>*/}
            </div>}
        </div>
    );
}