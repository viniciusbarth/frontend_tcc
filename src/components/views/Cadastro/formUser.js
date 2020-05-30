import React, {Component} from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

import {ToastsStore, ToastsContainer} from 'react-toasts';
import { Col, Row, Button, Form, FormGroup, Label, Input  } from 'reactstrap';

import { Multiselect } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';

import api from "../../../services/api";
import AgroTable from '../../AgroTable';


class FormUser extends Component {

	constructor(props) {
		super(props);
	
		this.stateInicial = {
			usuDsNome:'',
			usuDsEmail : '',
			usuDsSenha: '',
			usuLsFuncoes : ['USUARIO','OPERADOR','ADMIN'],
			data:[]
		}

		this.state = this.stateInicial;
	};
	
	
	onChange = (event) =>{
	let valor;
	let nomeDoCampo
	if(event.target !== undefined)	{
		valor = event.target.value;
		nomeDoCampo = event.target.name;
	}else{
		valor = event;
		nomeDoCampo = 'usuLsFuncoes'
	}
	

	this.setState({
		[nomeDoCampo] : valor
	})
	
	};


	removeUser = async id => {
		await api.delete("/usuarios/"+id)
		.then((res) =>{
			this.allUser()
		})
		.catch(error => {
			ToastsStore.error(error)
			console.log(error)
		});
	}
	
	editUser = item => {
		const {usuDsSenha, ...restItem} = item
		this.setState(restItem);
  	}


	onSubmit = async e => {
	e.preventDefault();
	const {data, ...restItem} = this.state
	if(!this.state.usuCdUsuario){
		await api.post("/usuarios", restItem)
			.then((res) =>{
				this.setState(this.stateInicial);
				this.componentDidMount();
				ToastsStore.success("Usuário cadastrado com sucesso!");
			})
			.catch(error => {
				ToastsStore.error(error.response.data.error.message)
			});
	}else{

		const {usuCdUsuario, ...item} = restItem;

		await api.put("/usuarios/"+this.state.usuCdUsuario, item)
		.then((res) =>{
			this.setState(this.stateInicial);
			this.componentDidMount();
			ToastsStore.success("Usuário cadastrado com sucesso!");
		})
		.catch(error => {
			console.log(error);
			// ToastsStore.error(error.response.data.error.message)
		});
	}

	};

	async allUser() {
		await api.get("/usuarios/all")
		.then((res) =>{
			this.setState({ data: res.data })
		})
		.catch(error => {
			ToastsStore.error(error.response.data)
		});
	}

	async componentDidMount() {
		this.allUser()
	}

	render(){

	const {usuDsNome,usuDsEmail,usuDsSenha,usuLsFuncoes} = this.state;

	return (
		<div>
			<AgroMenu></AgroMenu>
			<ToastsContainer store={ToastsStore}/>
			<ol className="breadcrumb">
				<li className="breadcrumb-item active">Cadastro Usuário</li>
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
								<Multiselect
									name="usuLsFuncoes" 
									id="usuLsFuncoes"
									data={this.stateInicial.usuLsFuncoes}
									onChange={this.onChange} value={usuLsFuncoes}
									valueField='id'
									textField='name'
								/>
							</FormGroup>
							</Col>
						</Row>
						<Button color="success" onClick={this.onSubmit}>Salvar</Button>
					</Form>
				</div>
			</div>
			<AgroTable data={this.state.data} columns={['id','nome','email', 'Excluir', 'Editar']} table={'usuario'} removeUser={this.removeUser} editUser={this.editUser}></AgroTable>
		</div>
	)
}
};
export default FormUser;