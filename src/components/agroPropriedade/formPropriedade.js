import React from 'react';

import "./style.css";
import AgroMenu from '../agroMenu';

export default function FormPropriedade() {

	onsubmit = () => {

		alert('testando 1 2 3')

	};

	return (
		<div className="form-propriedade">
			<AgroMenu></AgroMenu>
			<form>
				<h1>Cadastro de Propriedade</h1>

				<div className="form-label-group">
					<input name="name" placeholder="Nome da propriedade..."></input>
				</div>

				<div className="form-label-group">
					<input name="name" placeholder="Principal agricultura..."></input>
				</div>

				<button className="buttonCadastrar" value="Cadastrar">Cadastrar</button>
			</form>
		</div>
	)
};