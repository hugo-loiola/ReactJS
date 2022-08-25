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
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";


const App = () => {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>

			<div className="Cards">

				<Card titulo='#12 - Contador' color='#424242'>
					<Contador numeroInicial={0}></Contador>
				</Card>

				<Card titulo='#11 - Componente Controlado'>
					<Input></Input>
				</Card>

				<Card titulo='#10 - Comunicação Indireta' color='#511515'>
					<IndiretaPai></IndiretaPai>
				</Card>

				<Card titulo='#09 - Comunicação Direta' color='#123456'>
					<DiretaPai></DiretaPai>
				</Card>

				<Card titulo={"#08 - Condicional"} color="#982395" >
					<ParOuImpar numero={1} ></ParOuImpar>
					<UsuarioInfo usuario={{ nome: "Gostoso" }}></UsuarioInfo>
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