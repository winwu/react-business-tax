import React, { Component } from 'react';
import './App.css';

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
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<div className="text-right">
							<a className="github-button" href="https://github.com/winwu/react-business-tax/issues" aria-label="Issue winwu/react-business-tax on GitHub">Issue</a>
						</div>
						<h1 className="display-4">營業稅試算</h1>
						<p className="lead">練習 React 用，算錯不負責 XD</p>
						<div className="form-row">
							<div className="col-auto mb-3">
								<label htmlFor="price-input">金額</label>
								<input id="price-input" className="form-control" type="text" value={this.state.price} pattern="[0-9.]+" onChange={this.handlePriceChange}/>
							</div>
							<div className="col-auto">
								<div className="mb-3">
									<label htmlFor="tax-input">設定稅額</label>
									<div className="input-group">
										<input id="tax-input" className="form-control" type="text" value={this.state.tax} pattern="[0-9.]+" onChange={this.handleTaxChange}/>
										<div className="input-group-append">
											<div className="input-group-text">%</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-3 mb-3">
					{ isNaN(this.state.price) === false ? (
						<div className="row">
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
										<div>{this.getExcludeTax.price} + {this.getExcludeTax.taxValue} =  {this.getExcludeTax.price + this.getExcludeTax.taxValue}</div>
									</div>
								</div>
							</div>
						</div>
						) : (
							<div class="alert alert-warning" role="alert">
								<b>Sorry! 我算不出來</b> 請填入正確的數字
						  	</div>
						)
					}
				</div>
			</div>
		);
	}
}

export default App;
