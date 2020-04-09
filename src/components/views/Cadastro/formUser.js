import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

import axios from 'axios'
import {ToastsStore} from 'react-toasts';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import api from "../../../services/api";


export default class FormUser extends React.Component{

	constructor(props) {
		super(props);
	
		this.state = {
		  nome:'',
		  email : '',
		  senha: '',
		  funcoes:'ROLE_USUARIO'
		}
	  }
	
	
	  onChange = (event) =>{
		const valor = event.target.value;
		const nomeDoCampo = event.target.name;
	
		this.setState({
		  [nomeDoCampo] : valor
		})
	  }
	
	  onSubmit = async e => {
		e.preventDefault();
	
		await api.post("/usuarios", this.state)
		  .then((res) =>{
			ToastsStore.success("Sucesso!")
			this.props.history.push("/home");
		  })
		  .catch(error => {
			ToastsStore.error(error.response.data.error.message)
		  });
	
	  };

	render(){
	return (
		<div>
			<AgroMenu></AgroMenu>
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
									<Input type="text" name="nome" id="nome" onChange={this.onChange} value={this.state.nome} placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="exampleEmail">E-mail</Label>
									<Input type="email" name="email" id="exampleEmail" onChange={this.onChange} value={this.state.email} placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="examplePassword">Senha</Label>
									<Input type="password" name="senha" id="examplePassword" onChange={this.onChange} value={this.state.senha} placeholder="Digite sua senha" />
								</FormGroup>
							</Col>
						</Row>
						<Button color="success" onClick={this.onSubmit}>Salvar</Button>
					</Form>
				</div>
			</div>
		</div>
	)}
};