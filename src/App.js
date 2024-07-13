import Navbar from './Navbar';
import Home from './home';
import Create from './create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // Can output anything except for a boolean and an object
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch> {/* Switch is used to only render the first route that matches */}
          <Route exact path="/"> {/* Path is the route */}
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;