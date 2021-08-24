import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./Cars";
import CreateCar from "./createCar/CreateCar";
export default function CarForm () {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={'/cars'}>to cars page</Link></li>
                    <li><Link to={'/even-cars'}>to even cars page</Link></li>
                    <li><Link to={'/odd-cars'}>to odd cars page</Link></li>
                    <li><Link to={'/create-car'}>to create car page</Link></li>
                    <li><Link to={'/update-car'}>to update car page</Link></li>
                </ul>
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
                    <Route path={'/create-car'} render={() => {
                        return <CreateCar/>;
                    }}>
                    </Route>
                    <Route path={'/create-car'} render={() => {
                        return <CreateCar/>;
                    }}>
                    </Route>
                </Switch>


            </div>
        </Router>

    );
}