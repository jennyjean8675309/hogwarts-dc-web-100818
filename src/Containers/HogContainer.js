import React, { Component } from 'react'
import hogs from '../porkers_data';
import HogTile from '../components/HogTile'
import InputFields from '../components/InputFields'


class HogContainer extends Component {
  constructor(){
    super()
    this.state = {
      myHogs: hogs
    }
  }

  handleNameSort = (event) => {
    let sortedBy = event.target.value
    let sortedHogs = [...this.state.myHogs]

    if (sortedBy === 'name'){
      sortedHogs = sortedHogs.sort(function (a, b) {
      return a.name.localeCompare(b.name)})
    } else if (sortedBy === 'weight'){
      sortedHogs = sortedHogs.sort((a, b) => {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})
    } else if (sortedBy === 'greased'){
      sortedHogs = sortedHogs.filter(hog => hog.greased === true)
    } else if (sortedBy === 'ungreased'){
      sortedHogs = sortedHogs.filter(hog => hog.greased === false)
    }
    this.setState({
      myHogs: sortedHogs
    })
  }

  render(){
    return (
      <div>
        <InputFields onSort={this.handleNameSort} />
        <br></br>
        <div className="ui grid container">
          {this.state.myHogs.map(hog =>
            <HogTile
              key={hog.name}
              name={hog.name}
              specialty={hog.specialty}
              greased={hog.greased}
              weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
              medal={hog['highest medal achieved']}
            />)}
          </div>
      </div>
    )
  }
}

export default HogContainer
