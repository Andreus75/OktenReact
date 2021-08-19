export default function Car ({car, deleteCar}) {
    let onClickDeleteCar = () => {
        deleteCar(car.id);
    }
    return (
        <div>
             {car.id}. Model : {car.model}. Price : {car.price}. Year : {car.year}
            <button onClick={onClickDeleteCar}>delete</button>
            <button>edit</button>
        </div>
    );
}