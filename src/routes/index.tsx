import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'  ;
import Blocks from '../pages/Blocks';
import Classes from '../pages/Classes';
import Contents from '../pages/Contents';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:id/classes">
          <Classes />
        </Route>

        <Route exact path="/classes/:classId/blocks">
          <Blocks />
        </Route>

        <Route exact path="/classes/:classId/blocks/:blockId/contents">
          <Contents />
        </Route>
      </Switch>
    </Router>
  )
}