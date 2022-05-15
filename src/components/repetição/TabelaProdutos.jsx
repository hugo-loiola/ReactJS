import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

const TabelaProdutos = () => {

	const prod = produtos.map((produto, i) => {
		return (
			<tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
				<td>{(produto.id) + 1}</td>
				<td>{(produto.nome)}</td>
				<td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
			</tr>
		);
	});

	return (
		<div className="Tabela">
			<table >
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>
					{prod}
				</tbody>
			</table>
		</div>
	);
};

export default TabelaProdutos;