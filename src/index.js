import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/basicos/Primeiro";
import Componente from "./components/basicos/Componente";

ReactDOM.render(
	<div id="app">
		<Primeiro/>
		<Componente 
			name= "Hugo" 
			nota= {9.0} />
	</div>,
	document.getElementById("root")
);
