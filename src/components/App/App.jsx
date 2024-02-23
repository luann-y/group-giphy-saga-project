
//Router
import {
  HashRouter as Router,
  Route,

} from "react-router-dom/cjs/react-router-dom.min";

// components
import Header from '../Header/Header';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';

import SearchForm from '../SearchForm/SearchForm';

import ImageResult from "../ImageResult/ImageResult";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchForm />
          </Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>

       
       
        <ImageResult />

        </main>
      </Router>
    </div>
  );
}

export default App;
