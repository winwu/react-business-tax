import React from 'react';

export default props => (
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
          <input
            id="price-input"
            className="form-control"
            type="text"
            value={props.price}
            pattern="[0-9.]+"
            onChange={props.handlePriceChange}/>
        </div>
        <div className="col-auto">
          <div className="mb-3">
            <label htmlFor="tax-input">設定稅額</label>
            <div className="input-group">
              <input
                id="tax-input"
                className="form-control"
                type="text"
                value={props.tax}
                pattern="[0-9.]+"
                onChange={props.handleTaxChange}/>
              <div className="input-group-append">
                <div className="input-group-text">%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
