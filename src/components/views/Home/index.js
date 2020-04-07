import React from 'react';

import "./home.css";
import AgroMenu from '../../AgroMenu';


class Home extends React.Component {
	render() {
		return (
			<div>
			<AgroMenu></AgroMenu>
			<ol className="breadcrumb">
				<li className="breadcrumb-item active">Home</li>
			</ol>
			</div>
		)
	}
};

export default Home;	