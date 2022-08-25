import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = () => {
	return (
		<div>
			<DiretaFilho nome='Eduardo' idade={20} nerd={true} />
			<DiretaFilho nome='Rogério' idade={7} nerd={false} />
			<DiretaFilho nome='Gabriel' idade={17} nerd={true} />
		</div>
	);
};

export default DiretaPai;