import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';
import api from "../../../services/api";
import {ToastsStore, ToastsContainer} from 'react-toasts';
import AgroTable from '../../AgroTable';

// import { DropdownList } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';



export default class formCultura extends React.Component {
	

	constructor(props) {
		super(props);
	
		this.stateInicial = {
			culDsNome:'',
			culVlMmIdeal: '',
			culVlTempMinIdeal: '',
			culVlTempMaxIdeal: '',
			data:[]
		}

		this.state = this.stateInicial;
	};
	
	removeCultura = async id => {
		await api.delete("/cultura/"+id)
		.then((res) =>{
			this.allCulturas()
		})
		.catch(error => {
			ToastsStore.error(error)
			console.log(error)
		});
	}

	editCultura = item => {
		this.setState(item);
  	}

	async allCulturas() {
		await api.get("/cultura/all")
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
		await api.get("/cultura/all")
		.then((res) =>{
			this.setState({ data: res.data })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});

		// await api.get("/propriedades/allpropriedades")
		// .then((res) =>{
		// 	this.setState({ data: res.data })
		// })
		// .catch(error => {
		// 	ToastsStore.error(error.response.data)
		// });
	}

	onSubmit = async e => {
		e.preventDefault();
		const {data, ...restConfig} = this.state;
		if(!this.state.culCdCultivo){
			await api.post("/cultura", restConfig)
				.then((res) =>{
					this.setState(this.stateInicial);
					this.componentDidMount();
					ToastsStore.success("Cultura cadastrada com sucesso!");
				})
				.catch(error => {
					ToastsStore.error(error.response.data.error.message)
				});
		}else{
			await api.put("/cultura/"+this.state.culCdCultivo, restConfig)
			.then((res) =>{
				this.setState(this.stateInicial);
				this.componentDidMount();
				ToastsStore.success("Cultura cadastrada com sucesso!");
			})
			.catch(error => {
				ToastsStore.error(error.response.data.error.message)
			});
		}
	};


	render(){

		const {culDsNome,culVlMmIdeal,culVlTempMinIdeal,culVlTempMaxIdeal} = this.state;
		// let propriedades = this.state.propriedades;
		return (
			<div>
				<AgroMenu></AgroMenu>
				<ToastsContainer store={ToastsStore}/>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Cadastro de Cultura</li>
				</ol>
				<div style={{ margin: 20 }}>
					<div className="jumbotron">
						<form>
							<fieldset>
								<legend>Cadastro de Cultura</legend>
								<div className="row">
									<div className="form-group col-sm-6">
										<label htmlFor="culDsNome">Nome Cultura</label>
										<input type="text" className="form-control" id="culDsNome" name="culDsNome" onChange={this.onChange} value={culDsNome} placeholder="Ex:. Café" />
									</div>
									<div className="form-group col-sm-6">
										<label htmlFor="culVlMmIdeal">Milímetros ideias para a cultura</label>
										<input type="text" className="form-control" id="culVlMmIdeal" name="culVlMmIdeal" onChange={event => this.setState({culVlMmIdeal: event.target.value.replace(/\D/,'')})} value={culVlMmIdeal} placeholder="Ex:. 126" />
									</div>
									<div className="form-group col-sm-6">
										<label htmlFor="culVlTempMinIdeal">Temperatura Mín.</label>
										<input type="text" className="form-control" id="culVlTempMinIdeal" name="culVlTempMinIdeal" onChange={event => this.setState({culVlTempMinIdeal: event.target.value.replace(/\D/,'')})} value={culVlTempMinIdeal} placeholder="Ex:. 18" />
									</div>
									<div className="form-group col-sm-6">
										<label htmlFor="culVlTempMaxIdeal">Temperatura Máx.</label>
										<input type="text" className="form-control" id="culVlTempMaxIdeal" name="culVlTempMaxIdeal" onChange={event => this.setState({culVlTempMaxIdeal: event.target.value.replace(/\D/,'')})} value={culVlTempMaxIdeal} placeholder="Ex:. 25" />
									</div>
									{/* <div className="form-group col-sm-3">
										<label htmlFor="culVlMmIdeal">Milímetros ideias para a cultura</label>
										<DropdownList
											data={propriedades}
											value={this.state.value}
											onChange={value => this.setState({ value })}
										/>
									</div> */}
								</div>
								<button type="button" onClick={this.onSubmit} disabled={!this.state.culDsNome} className="btn btn-success">Salvar</button>
							</fieldset>
						</form>
					</div>
				</div>
				<AgroTable data={this.state.data} columns={['ID. da Cultura','Nome','Mm ideal para o cultivo','Temperatura Mín.','Temperatura Máx.','Excluir','Editar']} table={'Cultura'} removeCultura={this.removeCultura} editCultura={this.editCultura}></AgroTable>
			</div>
		)
	}
};