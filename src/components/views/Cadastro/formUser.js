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
			usuDsNome:'',
			usuDsEmail : '',
			usuDsSenha: '',
			usuLsFuncoes:['USUARIO'],
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

	if(nomeDoCampo === 'usuLsFuncoes'){
		
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
			this.componentDidMount();
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

	const {usuDsNome,usuDsEmail,usuDsSenha,usuLsFuncoes} = this.state;
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
									<Label for="usuDsNome">Nome</Label>
									<Input type="text" name="usuDsNome" id="usuDsNome" onChange={this.onChange} value={usuDsNome} placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="usuDsEmail">E-mail</Label>
									<Input type="email" name="usuDsEmail" id="usuDsEmail" onChange={this.onChange} value={usuDsEmail} placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="usuDsSenha">Senha</Label>
									<Input type="password" name="usuDsSenha" id="usuDsSenha" onChange={this.onChange} value={usuDsSenha} placeholder="Digite sua senha" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="usuLsFuncoes">Funções</Label>
									<Input type="select" name="usuLsFuncoes" id="usuLsFuncoes" onChange={this.onChange} value={usuLsFuncoes}>
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
			<AgroTable data={this.state.data} columns={['id','nome','email']} table={'usuario'}></AgroTable>
		</div>
	)
}
};