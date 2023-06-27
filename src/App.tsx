import "styles/global.scss";
import "./i18n";
import Home from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "pages/contact";

function App(): JSX.Element {
  return (
    <div className="App">
      < BrowserRouter>
        <Routes>
        <Route >
          <Route path="/" element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
