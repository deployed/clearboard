import {
    Switch,
    Router as RRDRouter,
    Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
    Home,
    Dashboard,
    Board,
    Navbar
} from 'containers';
import Register from 'containers/Home/Auth/components/RegisterForm/Register';

const history = createBrowserHistory();

const Router: React.FC = () => (
    <RRDRouter history={history}>
        <Switch>
            <Route exact path="/">
                <Home />      
            </Route>
            <Route exact path="/register">
                <Register />      
            </Route>
            <Route path="/dashboard">
                <Navbar component={Dashboard} />
            </Route>
            <Route path="/board/:boardId">
                <Navbar component={Board} />
            </Route>
        </Switch>
    </RRDRouter>
);

export default Router;
