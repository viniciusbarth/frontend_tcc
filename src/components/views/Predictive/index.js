import React from 'react';

import "./predictive.css";
import AgroMenu from '../../AgroMenu';

import {Col, FormGroup, Label, Input,Row  } from 'reactstrap';
import AgroCard from '../../AgroCard';

import api from "../../../services/api";
import {ToastsStore, ToastsContainer} from 'react-toasts';

import { DropdownList } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';

class Predictive extends React.Component {

	constructor(props) {
		super(props);
	
		this.stateInicial = {
			value: 'Nenhum'
		}

		this.state = this.stateInicial;
		
	};

	onChange = (event) =>{
		let valor;
		let nomeDoCampo;

		valor = event;
		nomeDoCampo = 'idCultura'
		
		this.setState({
			[nomeDoCampo] : valor
		})
		
	};

	async componentDidMount() {
		await api.get("/cultura/all")
		.then((res) =>{
			let arrayFormatado =[];
			res.data.forEach(element => {
				arrayFormatado.push(element.culCdPropriedade)
			});
			this.setState({ culturas: arrayFormatado })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
	}

	async gerarPredicao() {

		await api.get("/predicao/anual"+ this.state.valor)
		.then((res) =>{
			console.log(res)
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
		
	}

	render() {
		let culturas = this.state.culturas;
		return (
			<div>
				<AgroMenu></AgroMenu>
				<ToastsContainer store={ToastsStore}/>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Análise preditiva</li>
				</ol>
				<div className="jumbotron">
					<h3 style={{textAlign: "center"}}>Análise Preditiva</h3>
					<Col md={12} className="alignDate">
						<Col md={2}>
							<FormGroup>
								<Label for="exampleDate" style={{display: "flex",justifyContent: "center",marginTop: "15px"}}>Data para a predição</Label>
								<Input
									type="month"
									name="month"
									id="exampleDate"
								/>
							</FormGroup>
						<button type="button" class="btn btn-primary" style={{marginLeft: "33%"}} onClick={this.gerarPredicao}>Gerar</button>
					</Col>
					<Col md={2}>
							<FormGroup>
								<Label for="exampleDate" style={{display: "flex",justifyContent: "center",marginTop: "15px"}}>Selecione uma cultura para feedback</Label>
								<DropdownList
									data={culturas}
									value={this.state.value}
									onChange={value => this.setState({ value })}
								/>
							</FormGroup>
						</Col>
					</Col>
				</div>

				<Col className="col-sm-12 alignCards">
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
						<div className="col-sm-2">
							<AgroCard></AgroCard>
						</div>
				</Col>

			</div>
		)
	}
};

export default Predictive;	