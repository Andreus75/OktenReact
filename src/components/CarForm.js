import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./Cars";
import CreateCar from "./createCar/CreateCar";
import UpdateCar from "./updateCar/UpdateCar";
import "./style/CarForm.css"

export default function CarForm() {
    return (
        <Router>
            <div>
                <div className={'wrap'}>

                        <Link to={'/cars'}>to cars page</Link>
                        <Link to={'/even-cars'}>to even cars page</Link>
                        <Link to={'/odd-cars'}>to odd cars page</Link>
                        <Link to={'/create-car'}>to create car page</Link>
                        <Link to={'/update-car'}>to update car page</Link>
                </div>
                <Switch>
                    <Route path={'/cars'}>
                        <h3>Cars : </h3>
                        <Cars url={'cars'}/>
                    </Route>
                    <Route path={'/even-cars'}>
                        <Cars url={'even'}/>
                    </Route>
                    <Route path={'/odd-cars'}>
                        <h3>Odd Cars : </h3>
                        <Cars url={'odd'}/>
                    </Route>
                </Switch>
                <Route path={'/create-car'} render={() => {
                    return <CreateCar/>;
                }}>
                </Route>
                <Route path={'/update-car'} render={() => {
                    return <UpdateCar/>;
                }}>
                </Route>
            </div>
        </Router>

    );
}