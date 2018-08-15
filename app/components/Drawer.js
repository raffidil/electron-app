import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { MailFolderListItems, OtherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List><MailFolderListItems history={this.props.history} location={this.props.location} /></List>
        <Divider />
      <List><OtherMailFolderListItems history={this.props.history} location={this.props.location}/></List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List><MailFolderListItems  history={this.props.history} location={this.props.location}/></List>
        <Divider />
      <List><OtherMailFolderListItems history={this.props.histoy} location={this.props.location}/></List>
      </div>
    );

    return (
      <div>
        <Drawer anchor="right" open={this.props.open} onClose={this.props.drawerToggle}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.drawerToggle}
            onKeyDown={this.props.drawerToggle}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
