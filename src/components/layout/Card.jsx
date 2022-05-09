/* eslint-disable react/prop-types */
import React from "react";
import "./Card.css";

const Card = (props) => {
	return (
		<div className="Card">
			<div className="Title">{props.titulo}</div>
			<div className="Content">{props.children}</div>
		</div>
	);
};

export default Card;
