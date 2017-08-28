import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
         value={this.state.value}
         onChange={this.handleChange} />
         <p> characters left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;