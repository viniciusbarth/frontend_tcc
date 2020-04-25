import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

export default class Login extends React.Component {
	
	render(){
		return (
			<div>
				<AgroMenu></AgroMenu>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Home > Cadastro de Propriedade</li>
				</ol>
				<div style={{ margin: 20 }}>
					<div className="jumbotron">
						<form>
							<fieldset>
								<legend>Cadastro de Propriedade</legend>
								<div className="form-group">
									<label htmlFor="nomePropriedade">Nome Propriedade</label>
									<input type="text" className="form-control" id="nomePropriedade" name="nomePropriedade"  placeholder="Ex:. Fazenda Boa Fé" />
								</div>
								<div className="form-group">
									<label htmlFor="descPropriedade">Descrição da Propriedade</label>
									<input type="text" className="form-control" id="descPropriedade" name="descPropriedade"  placeholder="Descrição geral da propriedade" />
								</div>
								<button type="button" onClick={this.onSubmit} className="btn btn-success">Salvar</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		)
	}
};