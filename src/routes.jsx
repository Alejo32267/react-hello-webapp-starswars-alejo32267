// Import necessary components and functions from react-router-dom.
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Characters from "./components/Characters"; // <- Characters ya es default
//import CharacterDetails from "./components/CharacterDetails"; // <- CORREGIDO: ya no con llaves
import { Layout } from "./pages/Layout"; // o donde esté ubicado

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} /> {/* Ruta raíz */}
{/* <Route path="/character/:uid" element={<CharacterDetails />} /> */}
      <Route path="Characters" element={<Characters />} />
    </Route>
  )
);
