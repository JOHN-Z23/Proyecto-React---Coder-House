import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarExample from "./componentes/NavBar";
import Contacto from "./diseño/contacto";
import Ofertas from "./diseño/ofertas";
import ItemListContainer from "./diseño/ItemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route
              index
              element={
                <>
                  <ItemListContainer greeting={" "}/>
                </>
              }
            />
            <Route path="ofertas" element={<Ofertas  />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
