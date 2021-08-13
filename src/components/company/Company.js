export default function Company ({company: {name, catchPhrase, bs}}) {
    return (
        <div>
            <h3>company :</h3>
            <ul>
                <li>name : {name}</li>
                <li>catchPhrase : {catchPhrase}</li>
                <li>bs : {bs}</li>
            </ul>
        </div>
    );
}