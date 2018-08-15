// @flow
import React, { Component } from 'react';
import Header from './Header.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TitlebarGridList from './TitlebarGridList/TitlebarGridList';




export default class Gallery extends Component<Props> {

  render() {

    return (

      <div>
        <Header history={this.props.history} location={this.props.location}/>
      <div>
      <h1 style={{marginRight: "20px"}}>گالری عکس</h1>
      <div style={{width: "95%", margin: 'auto'}}>
      <Card><TitlebarGridList/></Card>
      </div>
      
        </div>
      </div>
    );
  }
}
