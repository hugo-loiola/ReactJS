/* eslint-disable react/prop-types */
import React from "react";

const IndiretaFilho = (props) => {

	const min = 10;
	const max = 90;
	const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
	const gerarNerd = () => Math.random() > 0.5;

	return (
		<div>
			<div>
				Filho
			</div>
			<button onClick={
				() => {
					props.quandoClicar("João", gerarIdade(), gerarNerd());
				}
			}>
				Fornecer Informações
			</button>
		</div>
	);
};

export default IndiretaFilho;