import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      errorMessage: true
    };
  }

  handleChange = event => {
    const linesArray = event.target.value.split("\n")

    this.setState({
        poem: event.target.value
      })

    if(event.target.value.length > 0 && linesArray.length === 3 && linesArray[0].trim().split(" ").length === 5 && linesArray[1].trim().split(" ").length === 3 && linesArray[2].trim().split(" ").length === 5){
      this.setState({
        errorMessage: false,
      })
    }
  }

  render() {
    return (
      <div>
        <textarea  value={this.state.poem} onChange={this.handleChange}
          rows="3" 
          cols="60" 
        />
        {this.state.errorMessage ?
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure! 
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;