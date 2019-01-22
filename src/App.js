import React, { Component } from 'react';
import Form from './components/Form';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tax: 5,
			price: 0
		};
		this.handleTaxChange = this.handleTaxChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
	}
	handleTaxChange(event) {
		this.setState({tax: event.target.value});
	}
	handlePriceChange(event) {
		this.setState({price: event.target.value});
	}
	renderWarning() {
		if (this.state.tax === '' && this.state.price === '') {
			return (<div className="alert alert-warning" role="alert">
				請填入金額及稅額。
			</div>)
		} else if (isNaN(this.state.price) === true || isNaN(this.state.tax) === true) {
			return (<div className="alert alert-warning" role="alert">
				<b>Sorry! 我算不出來</b> 請填入正確的數字
			</div>)
		}
	}
	renderResult() {
		return (<div className="row">
			<div className="col-12 col-md-6">
				<div className="card border-default mb-3">
					<div className="card-header"><b>含稅價</b></div>
					<div className="card-body">
						<h6 className="card-title">金額</h6>
						<p className="card-text">{this.getIncludeTax.price}</p>
						<h6 className="card-title">稅金</h6>
						<p className="card-text">{this.getIncludeTax.taxValue}</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-md-6">
				<div className="card border-default mb-3">
					<div className="card-header"><b>除稅價</b></div>
					<div className="card-body">
						<h6 className="card-title">金額</h6>
						<p className="card-text">{this.getExcludeTax.price}</p>
						<h6 className="card-title">稅金</h6>
						<p className="card-text">{this.getExcludeTax.taxValue}</p>
						<div>{this.getExcludeTax.price} + {this.getExcludeTax.taxValue} = {this.getExcludeTax.price + this.getExcludeTax.taxValue}</div>
					</div>
				</div>
			</div>
		</div>)
	}
	get getIncludeTax() {
		// 含稅價
		return {
			taxValue: Math.round(this.state.price * (this.state.tax/100)),
			price: Math.round(this.state.price * (1 + this.state.tax/100))	
		}
	}
	get getExcludeTax() {
		// 除稅價
		let exPrice = Math.round(this.state.price/(1 + this.state.tax/100));
		return {
			taxValue: this.state.price - exPrice,
			price: exPrice
		}
	}
	render() {
		return (
			<div className="App">
        <Form
          {...this.state}
          handleTaxChange={ this.handleTaxChange }
          handlePriceChange={ this.handlePriceChange }
        />
				<div className="container mt-3 mb-3">
					{ this.renderWarning() }
					{ isNaN(this.state.price) === false && isNaN(this.state.tax) === false  && this.renderResult() ? this.renderResult() : null }
				</div>
			</div>
		);
	}
}

export default App;
