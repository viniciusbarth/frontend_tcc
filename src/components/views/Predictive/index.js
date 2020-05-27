import React from 'react';

import "./predictive.css";
import AgroMenu from '../../AgroMenu';

import {Col, FormGroup, Label, Input  } from 'reactstrap';


class Predictive extends React.Component {
	render() {

		return (
			<div>
				<AgroMenu></AgroMenu>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Análise preditiva</li>
				</ol>
				<div className="jumbotron">
					<h3 style={{textAlign: "center"}}>Análise Preditiva</h3>
					<Col md={12}>
						<Col md={2}>
							<FormGroup>
							<Label for="exampleDate">Date</Label>
							<Input
								type="date"
								name="date"
								id="exampleDate"
								placeholder="date placeholder"
							/>
						</FormGroup>
					</Col>
					</Col>
				</div>
			</div>
		)
	}
};

export default Predictive;	