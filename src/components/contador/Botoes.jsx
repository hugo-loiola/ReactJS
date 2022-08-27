/* eslint-disable react/prop-types */
import React from "react";

const Botoes = props => {
	return (
		<div>
			<button onClick={props.decrementar}><strong>-</strong></button>
			<button onClick={props.incrementar}><strong>+</strong></button>
		</div>
	);
};

export default Botoes;