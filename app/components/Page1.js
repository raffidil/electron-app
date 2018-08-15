// @flow
import React, { Component } from 'react';
import Header from './Header.js';
import Button from '@material-ui/core/Button';
import Card from './Card.js';



export default class Page1 extends Component<Props> {
  state = {
    drawerOpen: false,

  };

  render() {

    return (

      <div>
        <Header history={this.props.history} location={this.props.location}/>
      <div style={{margineRight: 10}}>
          <Card/>
        </div>
      </div>
    );
  }
}
