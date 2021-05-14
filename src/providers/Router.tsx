import {
    Switch,
    Router as RRDRouter,
    Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
    Board
} from 'containers';
import { Home } from 'containers/Home';

const history = createBrowserHistory();

const Router: React.FC = () => (
    <RRDRouter history={history}>
        <Switch>
            <Route exact path="/">
                <Home />      
            </Route>
            <Route path="/board/:boardId">
                <Board />
            </Route>
        </Switch>
    </RRDRouter>
);

export default Router;
