import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { tax: 5, price: 0 };
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
    const { price, tax } = this.state;
		return {
			taxValue: Math.round(price * (tax / 100)),
			price: Math.round(price * (1 + tax / 100))	
		}
	}
	get getExcludeTax() {
		// 除稅價
    const { price, tax } = this.state;
		let exPrice = Math.round(price/(1 + tax / 100));
		return {
			taxValue: price - exPrice,
			price: exPrice
		}
	}
	render() {
    const {
      state: { price, tax },
      getIncludeTax,
      getExcludeTax,
      handleTaxChange,
      handlePriceChange,
    } = this;

		return (
			<div className="App">
        <Form
          {...this.state}
          {...{
            handleTaxChange,
            handlePriceChange,
          }}
        />
				<div className="container mt-3 mb-3">
              { !tax && !price &&
                <div className="alert alert-warning" role="alert">
                  請填入金額及稅額。
                </div>
              }
              { (isNaN(price) || isNaN(tax)) &&
                <div className="alert alert-warning" role="alert">
                  <b>Sorry! 我算不出來</b> 請填入正確的數字
                </div>
              }
              { !isNaN(price) && !isNaN(tax) &&
                <Result
                  {...{
                    getIncludeTax,
                    getExcludeTax,
                  }}
                />
              }
				</div>
			</div>
		);
	}
}

export default App;
