import Geo from "../geo/Geo";

export default function Address ({address}) {

    return (
        <div>
            Address :
            {address &&  <div>
                <ul>
                    <li>Street : {address.street}</li>
                    <li>Suite : {address.suite}</li>
                    <li>City : {address.city}</li>
                    <li>Zipcode : {address.zipcode}</li>
                    <li><Geo geo={address.geo}/></li>
                </ul>
            </div>}
        </div>
    );
}