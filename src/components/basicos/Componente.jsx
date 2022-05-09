/* eslint-disable react/prop-types */
import React from "react";

const Componente = (props) => {
	const status = props.nota >= 5 ? "Aprovado" : "Reprovado";
	return (
		<div>
			<h1>{props.titulo}</h1>
			<h2>{props.aluno} tem nota {props.nota} e está {status} </h2>
		</div>
	);
};

export default Componente;