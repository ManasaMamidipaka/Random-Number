// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({number: random})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number </h1>
          <p className="description">
            {' '}
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
