import React from 'react';

import "./style.css";
import AgroMenu from '../../AgroMenu';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function FormUser() {

	onsubmit = () => {

		alert('testando 1 2 3')

	};

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
									<Label for="exampleEmail">E-mail</Label>
									<Input type="email" name="email" id="exampleEmail" placeholder="Digite um e-mail válido joaosilva@gmail.com" />
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="examplePassword">Senha</Label>
									<Input type="password" name="password" id="examplePassword" placeholder="Digite sua senha" />
								</FormGroup>
							</Col>
						</Row>
						<Button color="success">Salvar</Button>
					</Form>
				</div>
			</div>
		</div>
	)
};