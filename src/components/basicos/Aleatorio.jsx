/* eslint-disable react/prop-types */
import React from "react";

const Aleatorio = ({ max, min }) => {
	const aleatorio = Math.floor(Math.random() * (max - min)) + min;
	return (
		<div>
			<h2>Número Aleatório</h2>
			<p>Este é o número minimo: {min}</p>
			<p>Este é o número máximo: {max}</p>
			<p>Este é o número aleatório entre os dois: {aleatorio}</p>
		</div>
	);
};

export default Aleatorio;