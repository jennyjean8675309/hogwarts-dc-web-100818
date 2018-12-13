import React, { Component } from 'react'

class InputFields extends Component {
  render(props){
    return (
      <div>
        <form>
          <label>Sort hogs by name </label>
          <input type="radio" value="name" checked={false} onChange={(event) => this.props.onSort(event)}/>
          <br/>
          <label>Sort hogs by weight </label>
          <input type="radio" value="weight" checked={false} onChange={(event) => this.props.onSort(event)}/>
          <br/>
          <label>Show only greased hogs </label>
          <input type="radio" value="greased" checked={false} onChange={(event) => this.props.onSort(event)}/>
          <br/>
          <label>Show only ungreased hogs </label>
          <input type="radio" value="ungreased" checked={false} onChange={(event) => this.props.onSort(event)}/>
        </form>
      </div>
    )
  }
}

export default InputFields
