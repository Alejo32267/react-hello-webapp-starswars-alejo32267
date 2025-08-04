import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails"; 
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="Characters" element={<Characters />} />
      <Route path="CharacterDetails/:uid" element={<CharacterDetails />} /> 
    </Route>
  )
);
