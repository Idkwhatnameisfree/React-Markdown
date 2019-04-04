import React, { Component } from 'react';
import Remarkable from 'remarkable';


export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
        value: 'Hello, **People** :p' };
  }

  // Event -> setState / event.target.value
  // setState({name:value})

   handleChange = (e) => {
     this.setState({ value: e.target.value});
  }

  getRawMarkup() {
    const md = new Remarkable()
    return {__html:md.render(this.state.value) };
  }

  render() {
    return (
      <div className="App">
        <h1>Input</h1>
          <h2>Enter some markdown</h2>
            
              <textarea rows="5" cols="50"
              id="App-Content"
              onChange={this.handleChange}
              defaultValue={this.state.value}
              />
            
          <h1>Output</h1>
        <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}>
        </div>

      </div>
    );
  }
}
