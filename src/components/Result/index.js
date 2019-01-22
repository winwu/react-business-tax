import React from 'react';

export default props => (
  <div className="row">
    <div className="col-12 col-md-6">
      <div className="card border-default mb-3">
        <div className="card-header"><b>含稅價</b></div>
        <div className="card-body">
          <h6 className="card-title">金額</h6>
          <p className="card-text">{props.getIncludeTax.price}</p>
          <h6 className="card-title">稅金</h6>
          <p className="card-text">{props.getIncludeTax.taxValue}</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="card border-default mb-3">
        <div className="card-header"><b>除稅價</b></div>
        <div className="card-body">
          <h6 className="card-title">金額</h6>
          <p className="card-text">{props.getExcludeTax.price}</p>
          <h6 className="card-title">稅金</h6>
          <p className="card-text">{props.getExcludeTax.taxValue}</p>
          <div>
            {props.getExcludeTax.price} + {props.getExcludeTax.taxValue} =
            {props.getExcludeTax.price + props.getExcludeTax.taxValue}
          </div>
        </div>
      </div>
    </div>
  </div>
)
