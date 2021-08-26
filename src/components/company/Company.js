export default function Company ({company}) {

    return (
        <div>
            {company && <div>
                Company :
                <ul>
                    <li>name : {company.name}</li>
                    <li>catchPhrase : {company.catchPhrase}</li>
                    <li>bs : {company.bs}</li>
                </ul>
            </div>}
        </div>
    );
}