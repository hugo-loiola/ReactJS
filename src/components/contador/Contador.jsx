/* eslint-disable react/prop-types */
import React from "react";

class Contador extends React.Component {

	state = {
		numero: this.props.numeroInicial
	};

	inc = () => {
		this.setState({
			numero: this.state.numero + 1
		});
	};

	dec = () => {
		this.setState({
			numero: this.state.numero - 1
		});
	};

	render() {
		return (
			<div>
				<h2>Clique!</h2>
				<h5>Valor inicial: {this.props.numeroInicial}</h5>
				<p>Valor: {this.state.numero}</p>
				<button onClick={this.inc}><strong>+</strong></button>
				<button onClick={this.dec}><strong>-</strong></button>
			</div>
		);
	}
}

export default Contador;