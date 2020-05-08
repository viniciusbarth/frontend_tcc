import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';
import api from "../../../services/api";
import {ToastsStore, ToastsContainer} from 'react-toasts';
import AgroTable from '../../AgroTable';
export default class Login extends React.Component {
	

	constructor(props) {
		super(props);
	
		this.stateInicial = {
			proDsNome:'',
			proDsDescricao : '',
			data:[]
		}

		this.state = this.stateInicial;
	};
	
	
	onChange = (event) =>{
		const valor = event.target.value;
		const nomeDoCampo = event.target.name;

		this.setState({
			[nomeDoCampo] : valor
		})
	};

	async componentDidMount() {
		await api.get("/propriedades/allpropriedades")
		.then((res) =>{
			this.setState({ data: res.data })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
	}


	render(){
		return (
			<div>
				<AgroMenu></AgroMenu>
				<ToastsContainer store={ToastsStore}/>
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
				<AgroTable data={this.state.data} columns={['ID. da propriedade','Nome','Descrição']} table={'propriedades'}></AgroTable>
			</div>
		)
	}
};