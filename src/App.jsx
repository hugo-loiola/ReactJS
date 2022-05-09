import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import Componente from "./components/basicos/Componente";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

const App = () => {
  <div>
    <h1>Fundamentos React</h1>
    <Aleatorio
      max={20}
      min={3}
    />
    <Primeiro></Primeiro>
    <Componente />
    <Fragmento></Fragmento>
  </div>
}
export default App