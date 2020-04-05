import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

export default function FormPropriedade() {

	onsubmit = () => {

		alert('testando 1 2 3')

	};

	return (
		<div>
			<AgroMenu></AgroMenu>
			<div className="form-propriedade">
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
		</div>
	)

};