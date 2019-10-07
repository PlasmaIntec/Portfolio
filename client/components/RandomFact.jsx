import React, { Component } from "react";
import axios from 'axios';

import '../styles/RandomFact.css';

class RandomFact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fact: {}
		};
	}

	componentWillMount() {
		axios.get('/random')
			.then(res => {
				var fact = res.data;
				console.log(fact);
				this.setState({ fact: fact });
			})
	}

	render() {
		return (
			<div className='rf'>
				<blockquote className="rf-quote">
					{ this.state.fact.word || "LOADING RANDOM FACT" }
				</blockquote>
				<h2>
					{ this.state.fact.meaning || null }
				</h2>
			</div>
		)
	}
}

export default RandomFact;