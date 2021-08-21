export default function Car ({car, deleteCar, editCar}) {
    let onClickDeleteCar = () => {
        deleteCar(car.id);
    }

    let onClickEditCar = () => {
        editCar(car);
    }

    return (
        <div className={''}>
             {car.id}. Model : {car.model}. Price : {car.price}. Year : {car.year}
            <button onClick={onClickDeleteCar}>delete</button>
            <button onClick={onClickEditCar}>edit</button>
        </div>
    );
}