import React, { Component } from 'react'

class HogTile extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true,
      isGreased: this.props.greased
    }
  }
  nameConverter = (props) =>{
     return this.props.name.toLowerCase().replace(/ /g, "_");
  }

  showDetails = (event, props) =>{
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(props){
    let imgUrl = require(`../hog-imgs/${this.nameConverter(this.props)}.jpg`)
    return (
      <div className="ui eight wide column">
        <h1>{this.props.name}</h1>
        <div>
          {this.state.isHidden ? <img src={imgUrl} alt='' /> :
          <div>
            <h3>Specialty: {this.props.specialty}</h3>
            <h3>Weight: {this.props.weight}</h3>
            <h3>Highest Medal Achieved: {this.props.medal}</h3>
            <h3>Greased Status: {this.state.isGreased ? <h4>This hog is greased.</h4> : <h4>This hog is not greased.</h4>}</h3>
            <br></br>
          </div>
          }
        </div>
        <button onClick={(event)=>this.showDetails(event, this.props)} >See more about {this.props.name}</button>
      </div>
  )}
}

export default HogTile
