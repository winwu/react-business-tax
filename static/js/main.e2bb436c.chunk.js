(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),s=(t(15),t(4)),i=t(5),m=t(7),d=t(6),u=t(8),o=t(1),h=(t(17),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={tax:5,price:0},t.handleTaxChange=t.handleTaxChange.bind(Object(o.a)(Object(o.a)(t))),t.handlePriceChange=t.handlePriceChange.bind(Object(o.a)(Object(o.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleTaxChange",value:function(e){this.setState({tax:e.target.value})}},{key:"handlePriceChange",value:function(e){this.setState({price:e.target.value})}},{key:"renderWarning",value:function(){return""===this.state.tax&&""===this.state.price?c.a.createElement("div",{className:"alert alert-warning",role:"alert"},"\u8acb\u586b\u5165\u91d1\u984d\u53ca\u7a05\u984d\u3002"):!0===isNaN(this.state.price)||!0===isNaN(this.state.tax)?c.a.createElement("div",{className:"alert alert-warning",role:"alert"},c.a.createElement("b",null,"Sorry! \u6211\u7b97\u4e0d\u51fa\u4f86")," \u8acb\u586b\u5165\u6b63\u78ba\u7684\u6578\u5b57"):void 0}},{key:"renderResult",value:function(){return!1===isNaN(this.state.price)&&!1===isNaN(this.state.tax)?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"card border-default mb-3"},c.a.createElement("div",{className:"card-header"},c.a.createElement("b",null,"\u542b\u7a05\u50f9")),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},"\u91d1\u984d"),c.a.createElement("p",{className:"card-text"},this.getIncludeTax.price),c.a.createElement("h6",{className:"card-title"},"\u7a05\u91d1"),c.a.createElement("p",{className:"card-text"},this.getIncludeTax.taxValue)))),c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"card border-default mb-3"},c.a.createElement("div",{className:"card-header"},c.a.createElement("b",null,"\u9664\u7a05\u50f9")),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},"\u91d1\u984d"),c.a.createElement("p",{className:"card-text"},this.getExcludeTax.price),c.a.createElement("h6",{className:"card-title"},"\u7a05\u91d1"),c.a.createElement("p",{className:"card-text"},this.getExcludeTax.taxValue),c.a.createElement("div",null,this.getExcludeTax.price," + ",this.getExcludeTax.taxValue," =  ",this.getExcludeTax.price+this.getExcludeTax.taxValue))))):null}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-right"},c.a.createElement("a",{className:"github-button",href:"https://github.com/winwu/react-business-tax/issues","aria-label":"Issue winwu/react-business-tax on GitHub"},"Issue")),c.a.createElement("h1",{className:"display-4"},"\u71df\u696d\u7a05\u8a66\u7b97"),c.a.createElement("p",{className:"lead"},"\u7df4\u7fd2 React \u7528\uff0c\u7b97\u932f\u4e0d\u8ca0\u8cac XD"),c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"col-auto mb-3"},c.a.createElement("label",{htmlFor:"price-input"},"\u91d1\u984d"),c.a.createElement("input",{id:"price-input",className:"form-control",type:"text",value:this.state.price,pattern:"[0-9.]+",onChange:this.handlePriceChange})),c.a.createElement("div",{className:"col-auto"},c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"tax-input"},"\u8a2d\u5b9a\u7a05\u984d"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{id:"tax-input",className:"form-control",type:"text",value:this.state.tax,pattern:"[0-9.]+",onChange:this.handleTaxChange}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("div",{className:"input-group-text"},"%")))))))),c.a.createElement("div",{className:"container mt-3 mb-3"},this.renderWarning(),this.renderResult()))}},{key:"getIncludeTax",get:function(){return{taxValue:Math.round(this.state.price*(this.state.tax/100)),price:Math.round(this.state.price*(1+this.state.tax/100))}}},{key:"getExcludeTax",get:function(){var e=Math.round(this.state.price/(1+this.state.tax/100));return{taxValue:this.state.price-e,price:e}}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);l.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.e2bb436c.chunk.js.map