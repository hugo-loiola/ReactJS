import React from "react";

function Componente(props) {
	return (
		<div>
			<h2>Olá, {props.name}</h2>
			<h3>{props.name} tem nota {props.nota}</h3>
		</div>
	);
}

export default Componente;