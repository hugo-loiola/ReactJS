import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/basicos/Primeiro";
import Componente from "./components/basicos/Componente";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div id='app'>
		<h1>Fundamentos React</h1>
		<Aleatorio
			max={1000}
			min={100}
		/>
		<Primeiro></Primeiro>
		<Componente />
		<Fragmento></Fragmento>
	</div>);
