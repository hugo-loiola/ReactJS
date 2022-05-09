/* eslint-disable react/prop-types */
import React from "react";
import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
	return (
		<div>
			<FamiliaMembro nome="Hugo" sobrenome={props.sobrenome}/>
			<FamiliaMembro nome="Ana Luísa" sobrenome="Mororó" {...props}/>
			<FamiliaMembro nome="Arroba" sobrenome="Ponto Com"/>
		</div>
	);
};

export default Familia;