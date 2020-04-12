import React from 'react';
import AgroMenu from '../../AgroMenu';

import "./style.css";

class Sobre extends React.Component {

	render() {
		return (
			<div>
				<AgroMenu></AgroMenu>
				<div className="sobre">
					<h1 className="titleSobre">Sobre o AgroSoftware</h1>
					<p>
						O presente trabalho foi realizado com o intuito de elaborar uma solução computacional que possa oferecer apoio a pequenas propriedades rurais, uma vez que estas estão carentes do avanço tecnológico já presente nas demais áreas de produção industrial e comercial. Diante disso, buscando a necessidade de se obter um controle maior sobre quando e quanto de determinada cultura será cultivado, se faz necessário uma ferramenta que disponibilize as melhores datas para o plantio e colheita conforme os dados meteorológicos da região onde se situa a propriedade rural. O objetivo do projeto é auxiliar o produtor através de uma aplicação que possa fornecer informações pertinentes das culturas presentes em sua propriedade, clima e períodos propícios para lavrar, preços e variações sazonais das mesmas, afim de aprimorar o processo de produção na lavoura, levando a um maior acerto na tomada de decisões através do emprego das informações disponibilizadas pelo software .
				</p>
				</div>
			</div>
		);
	}
}

export default Sobre;