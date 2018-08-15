// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Toolbar from './Toolbar.js';
import Drawer from './Drawer.js';
import Header from './Header.js';
import Button from '@material-ui/core/Button';

type Props = {};


export default class Home extends Component<Props> {
  state = {
    drawerOpen: false,

  };

  render() {

    return (

      <div>
        <Header history={this.props.history} location={this.props.location}/>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        <Link style={{fontSize: '30px'}} to="/counter">Counter</Link>
      <br/>
        <Link style={{fontSize: '30px'}} to="/page1">Page 1</Link>
        </div>
      </div>
    );
  }
}
