function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const api = "https://type.fit/api/quotes";
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [{
        "text": "",
        "author": "" }],

      index: 0 });_defineProperty(this, "getRandomIndex",









    () =>
    {
      const { quotes } = this.state;
      if (quotes.length > 0)
      {
        const ind = Math.floor(Math.random() * quotes.length);
        this.setState({
          index: ind });

      }
    });}componentDidMount() {fetch(api).then(res => res.json()).then(res => {this.setState({ quotes: res }, this.getRandomIndex);});}
  render()
  {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const turl = `https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`;
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper align-self-center d-flex justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 box align-self-center p-5 rounded ", id: "quote-box" },

      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-5" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
      React.createElement("p", { id: "author", className: "text-right" }, /*#__PURE__*/React.createElement("i", null, "- ", quote.author))), /*#__PURE__*/



      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", className: "btn btn-primary", target: "_blank", href: turl }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", className: "btn btn-primary", onClick: this.getRandomIndex }, "New Quotes")))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));