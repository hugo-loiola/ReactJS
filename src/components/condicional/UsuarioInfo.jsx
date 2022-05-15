/* eslint-disable react/prop-types */
import React from "react";
import If from "../condicional/if";

const UsuarioInfo = (props) => {
	const usuario = props.usuario || {};
	return (
		<div>
			<If test={usuario && usuario.nome}>
				<h3>Seja bem vindo <strong>{usuario.nome}!</strong></h3>
			</If>
			<If test={!usuario || !usuario.nome}>
				<h3>Seja bem vindo <strong>Anonimo!</strong></h3>
			</If>
		</div>
	);
};

export default UsuarioInfo;