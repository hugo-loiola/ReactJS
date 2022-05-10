/* eslint-disable react/prop-types */
import React, { cloneElement } from "react";

const Familia = (props) => {
	return (
		<div>
			{
				React.Children.map(props.children, child => {
					return cloneElement(child, props);
				})
			}
		</div>
	);
};

export default Familia;