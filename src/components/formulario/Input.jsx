/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Input.css";

const Input = props => {

	const [valor, setValor] = useState("inicial");

	function quandoMudar(e) {
		setValor(e.target.value);
	}

	return (
		<div className="input">
			<h2>{valor}</h2>
			<div style={{
				display: "flex",
				flexDirection: "column"
			}}>
				<input value={valor} onChange={quandoMudar} />
				<input value={undefined} />
			</div>

		</div>
	);
};

export default Input;