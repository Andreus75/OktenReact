export default function Geo ({geo}) {
    return (
        <div>
            Geo :
            {geo && <div>
                <ul>
                    <li>lat : {geo.lat}</li>
                    <li>lng : {geo.lng}</li>
                </ul>
            </div>}
        </div>
    );
}