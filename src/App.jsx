import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import Componente from "./components/basicos/Componente";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

const App = () => {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>

			<div className="Cards">

				<Card titulo="#04 - Desafio Aleatório">
					<Aleatorio max={10} min={1} />
				</Card>

				<Card titulo="#03 - Fragmento">
					<Fragmento></Fragmento>
				</Card>

				<Card titulo="#02 - Com Parametros">
					<Componente titulo="Notas" aluno="Hugo" nota={6.8} />
				</Card>

				<Card titulo="#01 - Primeiro Componente">
					<Primeiro></Primeiro>
				</Card>

			</div>
		</div>
	);
};

export default App;
