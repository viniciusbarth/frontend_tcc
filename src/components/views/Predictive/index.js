import React from 'react';

import "./predictive.css";
import AgroMenu from '../../AgroMenu';

import {Col, FormGroup, Label  } from 'reactstrap';
import AgroCard from '../../AgroCard';

import api from "../../../services/api";
import {ToastsStore, ToastsContainer} from 'react-toasts';

import { DropdownList } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';

class Predictive extends React.Component {

	constructor(props) {
		super(props);
	
		this.stateInicial = {
			value: 'Nenhum',
			culturas: ['treste','teffcd'],
			cards: []
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
			let obj = {};
			res.data.forEach(element => {
				obj = {
					id : element.culCdCultivo,
					name: element.culDsNome
				}
				arrayFormatado.push(obj)
			});
			this.setState({ culturas: arrayFormatado })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
	};

	gerarPredicao = async() => {
		console.log(this.state)
		await api.get("/predicao/anual/"+ this.state.value.id)
		.then((res) =>{
			this.setState({cards : res.data})
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
		
	}

	renderCards = () =>{
		return this.state.cards.map(item =>{
			return(
				<div className="col-sm-2" style={{border:"1px solid black", margin:"5px",borderRadius:"15px", backgroundColor:"white",padding:"15px"}}>
					<AgroCard config={item}></AgroCard>
				</div>
			)
		})
	}

	render() {

		return (
			<div className="backgroundPredict">
				<AgroMenu></AgroMenu>
				<ToastsContainer store={ToastsStore}/>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Análise preditiva</li>
				</ol>
				<div className="jumbotron">
					<h3 style={{textAlign: "center"}}>ANÁLISE PREDITIVA</h3>
					<Col md={12} className="alignDate">
						{/* <Col md={2}>
							<FormGroup>
								<Label for="exampleDate" style={{display: "flex",justifyContent: "center",marginTop: "15px"}}>Data para a predição</Label>
								<Input
									type="month"
									name="month"
									id="exampleDate"
								/>
							</FormGroup>
					</Col> */}
					<Col md={2}>
							<FormGroup>
								<Label for="exampleDate" style={{display: "flex",justifyContent: "center",marginTop: "15px"}}>Selecione uma cultura para feedback</Label>
								<DropdownList
									data={this.state.culturas}
									value={this.state.value}
									onChange={value => this.setState({ value })}
									valueField='id'
									textField='name'
									emptyList='testesss'
									filterPlaceholder='testresdgvvre'
									// defaultValue={1}
								/>
							</FormGroup>
						<button type="button" class="btn btn-primary" style={{marginLeft: "33%"}} disabled={!this.state.value.id} onClick={this.gerarPredicao}>Gerar</button>
						</Col>
					</Col>
				</div>
				<div className="row col-sm-12 alignCards" style={{display:"flex",justifyContent:"center"}}>
					{this.renderCards()}
				</div>

			</div>
		)
	}
};

export default Predictive;	