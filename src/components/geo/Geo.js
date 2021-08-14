export default function Geo ({geo: {lat, lng}}) {
    return (
        <div>
            <h3>Geo :</h3>
            <ul>
                <li>lat : {lat}</li>
                <li>lng : {lng}</li>
            </ul>
        </div>
    );
}