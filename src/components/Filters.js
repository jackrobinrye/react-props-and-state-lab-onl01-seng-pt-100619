import React from 'react'

class Filters extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      animalType: ""
    }
  }

  onSubmit = () => {
    this.props.onFindPetsClick(this.state.animalType)
    this.props.onChangeType(this.state.animalType)
  }

  onAnimalTypeChange = (event) => {
    this.setState({
      animalType: event.target.value
    })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.animalType} onChange={this.onAnimalTypeChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onSubmit}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
