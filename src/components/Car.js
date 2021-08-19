export default function Car ({car}) {
    return (

        <div>
            {car.id}. Model : {car.model}. Price : {car.price}. Year : {car.year}
        </div>
    );
}