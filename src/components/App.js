import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  findPetsClick = (filter = "all") => {
    if(filter === "all") {
      fetch('/api/pets')
        .then(response => response.json())
        .then(data => {
            this.setState({pets: data});
          }
          );
        }
        else if(filter === "cat") {
          fetch('/api/pets?type=cat')
          .then(response => response.json())
          .then(data => {
            this.setState({pets: data});
          }
          );
        }
        else if(filter === "dog") {
          fetch('/api/pets?type=dog')
          .then(response => response.json())
          .then(data => {
            this.setState({pets: data});
          }
          );
        }
        else if(filter === "micropig") {
          fetch('/api/pets?type=micropig')
          .then(response => response.json())
          .then(data => {
            this.setState({pets: data});
          }
        );
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={(type) => {this.setState({filters: {type: type}})}} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser  onAdoptPet={(petId) => { 
                // vvvv
                this.state.pets.filter(id === petId)[0]
              }}/>
            </div>
          </div>
        </div>
      </div>
    )
  }



}

export default App
