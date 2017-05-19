import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      val: this.state.val + 1
    })
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({ m: 2 });
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

  }

  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;