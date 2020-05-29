import React from 'react';

import "./predictive.css";
import AgroMenu from '../../AgroMenu';

import {Col, FormGroup, Label, Input,Row  } from 'reactstrap';
import AgroCard from '../../AgroCard';


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
						<button type="button" class="btn btn-primary" style={{marginLeft: "33%"}}>Gerar</button>
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