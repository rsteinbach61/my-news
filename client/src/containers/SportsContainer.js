import React, { Component } from 'react';
import getSports from '../actions/sportsActions';

class SportsContainer extends Component {
  componentDidMount() {
debugger;
    this.getSports()
  }

  render(){
    return(
      <div>Sports

      </div>
    )
  }
}
export default SportsContainer;
