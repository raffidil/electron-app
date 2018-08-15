// @flow
import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import Drawer from './Drawer.js';
import Button from '@material-ui/core/Button';

type Props = {};

export default class Header extends Component<Props> {
  state = {
    drawerOpen: false,
  };

  render() {

    return (

      <div>
        <Toolbar drawerToggle={() => {this.setState({drawerOpen: !this.state.drawerOpen})}}/>
      <Drawer open={this.state.drawerOpen} drawerToggle={() => {this.setState({drawerOpen: !this.state.drawerOpen})}} history={this.props.history} location={this.props.location}/>
      </div>
    );
  }
}
