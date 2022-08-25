/* eslint-disable react/prop-types */
import React from "react";

const DiretaFilho = (props) => {
	return (
		<div>
			<span> {props.nome} </span>
			<span> <strong>Idade: {props.idade}</strong> </span>
			<span> {props.nerd ? "ele é nerd" : "ele não é nerd"} </span>
		</div>
	);
};

export default DiretaFilho;