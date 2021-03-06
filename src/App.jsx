import React from "react";
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import Componente from "./components/basicos/Componente";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repetição/ListaAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParouImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";


const App = () => {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>

			<div className="Cards">

				<Card titulo={"#08 - Condicional"} color="#982395" >
					<ParOuImpar numero={1} ></ParOuImpar>
					<UsuarioInfo usuario={{ nome: "Hugo" }}></UsuarioInfo>
				</Card>

				<Card titulo="#07 - Desafio Repetição" color="#6495ED">
					<TabelaProdutos />
				</Card>

				<Card titulo="#06 - Repetição" color="#ff4c65">
					<ListaAlunos />
				</Card>

				<Card titulo="#05 - Componente com Filhos" color='#DE3163' >
					<Familia sobrenome="Loiola">
						<FamiliaMembro nome="Hugo" />
						<FamiliaMembro nome="Luísa" />
						<FamiliaMembro nome="Arroba" />
					</Familia>
				</Card>

				<Card titulo="#04 - Desafio Aleatório" color='#40E0D0' >
					<Aleatorio max={500} min={1} />
				</Card>

				<Card titulo="#03 - Fragmento" color='#FFBF00'>
					<Fragmento></Fragmento>
				</Card>

				<Card titulo="#02 - Com Parametros" color='#FF7F50'>
					<Componente titulo="Notas" aluno="Hugo" nota={8.5} />
				</Card>

				<Card titulo="#01 - Primeiro Componente">
					<Primeiro></Primeiro>
				</Card>

			</div>
		</div>
	);
};

export default App;