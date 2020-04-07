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
			<ol className="breadcrumb">
				<li className="breadcrumb-item active">Home > Cadastros</li>
			</ol>
			<div style={{margin: 20}}>
				<div className="jumbotron">
				<form>
					<fieldset>
						<legend>Cadastro de Propriedade</legend>
						<div className="form-group">
							<label htmlFor="nomePropriedade">Nome Propriedade</label>
							<input type="text" className="form-control" id="nomePropriedade" placeholder="Ex:. Fazenda Boa Fé"/>
						</div>
						<div className="form-group">
							<label htmlFor="descPropriedade">Descrição da Propriedade</label>
							<input type="text" className="form-control" id="descPropriedade" placeholder="Descrição geral da propriedade"/>
						</div>
						<button type="button" className="btn btn-success">Salvar</button>
					</fieldset>
				</form>
				</div>
			</div>
		</div>
	)

};