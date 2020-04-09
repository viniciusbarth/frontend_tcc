import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

import axios from 'axios'
import { login } from "../../../services/auth";
import {ToastsContainer, ToastsStore} from 'react-toasts';

const BASE_URL = 'http://localhost:8080/';

export default class Login extends React.Component {

	
	render(){
		return (
			<div>
				<AgroMenu></AgroMenu>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Home > Cadastros</li>
				</ol>
				<div style={{ margin: 20 }}>
					<div className="jumbotron">
						<form>
							<fieldset>
								<legend>Cadastro de Propriedade</legend>
								<div className="form-group">
									<label htmlFor="nomePropriedade">Nome Propriedade</label>
									<input type="text" className="form-control" id="nomePropriedade" name="nomePropriedade" onChange={this.onChange} value={this.state.email} placeholder="Ex:. Fazenda Boa Fé" />
								</div>
								<div className="form-group">
									<label htmlFor="descPropriedade">Descrição da Propriedade</label>
									<input type="text" className="form-control" id="descPropriedade" name="descPropriedade" placeholder="Descrição geral da propriedade" />
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