import React from "react";
import produtos from "../../data/produtos";

const TabelaProdutos = () => {

	const prod = produtos.map((produto) => {
		return(
			<li key={produto.id}>
				{produto.id}) {produto.nome} R${Math.floor(produto.preco)}
			</li>);
	});

	return (
		<div>
			<ul style={{listStyle: "none"}}>
				{prod}
			</ul>
		</div>
	);
};

export default TabelaProdutos;