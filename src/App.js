import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './app-components/about';
import CV from './app-components/cv';
import Publications from './app-components/publications';
import Nav from './app-components/nav';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/cv' element={<CV />} />
        <Route exact path='/publications' element={<Publications />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
