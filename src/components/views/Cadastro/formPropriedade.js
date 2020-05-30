import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';
import api from "../../../services/api";
import {ToastsStore, ToastsContainer} from 'react-toasts';
import AgroTable from '../../AgroTable';
export default class fomPropriedade extends React.Component {
	

	constructor(props) {
		super(props);
	
		this.stateInicial = {
			proDsNome:'',
			proDsDescricao : '',
			proFlCultivo: '',
			proFlUf: '',
			proMmIdeal: '',
			proVlTamanhoHectares:'',
			data:[]
		}

		this.state = this.stateInicial;
	};
	
	removePropriedade = async id => {
		await api.delete("/propriedades/"+id)
		.then((res) =>{
			this.allPropriedades()
		})
		.catch(error => {
			ToastsStore.error(error)
			console.log(error)
		});
	}

	editPropriedade = item => {
		this.setState(item);
  	}

	async allPropriedades() {
		await api.get("/propriedades/allpropriedades")
		.then((res) =>{
			this.setState({ data: res.data })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
	}
	
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

	onSubmit = async e => {
		e.preventDefault();
		const {data, ...restConfig} = this.state;
		if(!this.state.proCdPropriedade){
			await api.post("/propriedades", restConfig)
				.then((res) =>{
					this.setState(this.stateInicial);
					this.componentDidMount();
					ToastsStore.success("Propriedade cadastrada com sucesso!");
				})
				.catch(error => {
					ToastsStore.error(error.response.data.error.message)
				});
		}else{
			await api.put("/propriedades/"+this.state.proCdPropriedade, restConfig)
			.then((res) =>{
				this.setState(this.stateInicial);
				this.componentDidMount();
				ToastsStore.success("Propriedade cadastrada com sucesso!");
			})
			.catch(error => {
				ToastsStore.error(error.response.data.error.message)
			});
		}
	};


	render(){

		const {proDsNome,proDsDescricao,proFlCultivo,proFlUf,proVlTamanhoHectares,proMmIdeal} = this.state;

		return (
			<div>
				<AgroMenu></AgroMenu>
				<ToastsContainer store={ToastsStore}/>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Cadastro de Propriedade</li>
				</ol>
				<div style={{ margin: 20 }}>
					<div className="jumbotron">
						<form>
							<fieldset>
								<legend>Cadastro de Propriedade</legend>
								<div className="form-group">
									<label htmlFor="proDsNome">Nome Propriedade</label>
									<input type="text" className="form-control" id="proDsNome" name="proDsNome" onChange={this.onChange} value={proDsNome} placeholder="Ex:. Fazenda Boa Fé" />
								</div>
								<div className="form-group">
									<label htmlFor="proDsDescricao">Descrição</label>
									<input type="text" className="form-control" id="proDsDescricao" name="proDsDescricao" onChange={this.onChange} value={proDsDescricao} placeholder="Ex:. Fazenda Boa Fé" />
								</div>
								<div className="form-group">
									<label htmlFor="proVlTamanhoHectares">Tam. em hectáres</label>
									<input type="text" className="form-control" id="proVlTamanhoHectares" name="proVlTamanhoHectares" onChange={this.onChange} value={proVlTamanhoHectares} placeholder="73" />
								</div>
								<div className="form-group">
									<label htmlFor="proFlCultivo">Principal cultivo</label>
									<input type="text" className="form-control" id="proFlCultivo" name="proFlCultivo" onChange={this.onChange} value={proFlCultivo} placeholder="Café" />
								</div>
								<div className="form-group">
									<label htmlFor="proFlUf">UF</label>
									<input type="text" className="form-control" id="proFlUf" name="proFlUf" onChange={this.onChange} value={proFlUf} placeholder="ES" />
								</div>
								<div className="form-group">
									<label htmlFor="proMmIdeal">Precipitação(mm) ideal para o cultivo</label>
									<input type="text" className="form-control" id="proMmIdeal" name="proMmIdeal" onChange={event => this.setState({proMmIdeal: event.target.value.replace(/\D/,'')})} value={proMmIdeal} placeholder="126"/>
								</div>
								<button type="button" onClick={this.onSubmit} className="btn btn-success">Salvar</button>
							</fieldset>
						</form>
					</div>
				</div>
				<AgroTable data={this.state.data} columns={['ID. da propriedade','Nome','Descrição','Tam. em hectáres','Cultivo','UF','Mm ideal para o cultivo','Excluir','Editar']} table={'propriedade'} removePropriedade={this.removePropriedade} editPropriedade={this.editPropriedade}></AgroTable>
			</div>
		)
	}
};