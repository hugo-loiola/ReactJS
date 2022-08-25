import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";


const IndiretaPai = () => {

	const [nome, setNome] = useState("");
	const [idade, setIdade] = useState(0);
	const [nerd, setNerd] = useState(false);


	function fornecerInformacoes(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
	}
	return (
		<div>
			<span> {nome} </span>
			<span> {idade} </span>
			<span> {nerd ? "Verdadeiro" : "Falso"} </span>
			<IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
		</div>
	);
};

export default IndiretaPai;