import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

import {ToastsStore, ToastsContainer} from 'react-toasts';
import { Col, Row, Button, Form, FormGroup, Label, Input  } from 'reactstrap';

import api from "../../../services/api";
import AgroTable from '../../AgroTable';


export default class FormUser extends React.Component{

	constructor(props) {
		super(props);
	
		this.stateInicial = {
		  nome:'',
		  email : '',
		  senha: '',
			funcoes:[],
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

	if(nomeDoCampo === 'funcoes'){

		this.setState({
			[nomeDoCampo] : [valor]
		})
	}
	};

	onSubmit = async e => {
	e.preventDefault();

	await api.post("/usuarios", this.state)
		.then((res) =>{
			this.setState(this.stateInicial);
			ToastsStore.success("Usuário cadastrado com sucesso!");
		})
		.catch(error => {
			ToastsStore.error(error.response.data.error.message)
		});
	};

	async componentDidMount() {
		await api.get("/usuarios/all")
		.then((res) =>{
			this.setState({ data: res.data })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
	}

	render(){

	const {nome,email,senha,funcoes} = this.state;
	return (
		<div>
			<AgroMenu></AgroMenu>
			<ToastsContainer store={ToastsStore}/>
			<ol className="breadcrumb">
				<li className="breadcrumb-item active">Home > Cadastro Usuário</li>
			</ol>
			<div style={{ margin: 20 }}>
				<div className="jumbotron">
					<Form>
						<Row form>
						<Col md={6}>
								<FormGroup>
									<Label for="nome">Nome</Label>
									<Input type="text" name="nome" id="nome" onChange={this.onChange} value={nome} placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="exampleEmail">E-mail</Label>
									<Input type="email" name="email" id="exampleEmail" onChange={this.onChange} value={email} placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="examplePassword">Senha</Label>
									<Input type="password" name="senha" id="examplePassword" onChange={this.onChange} value={senha} placeholder="Digite sua senha" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="funcoes">Funções</Label>
									<Input type="select" name="funcoes" id="funcoes" onChange={this.onChange} value={funcoes}>
										<option value="USUARIO">USUARIO</option>
										<option value="OPERADOR">OPERADOR</option>
										<option value="ADMIN">ADMIN</option>
									</Input>
								</FormGroup>
							</Col>
						</Row>
						<Button color="success" onClick={this.onSubmit}>Salvar</Button>
					</Form>
				</div>
			</div>
			<AgroTable usuarios={this.state.data}></AgroTable>
		</div>
	)
}
};