// This file is shared across the demos.

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TimelineIcon from '@material-ui/icons/Timeline';
import SendIcon from '@material-ui/icons/Send';
import CollectionsIcon from '@material-ui/icons/Collections';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import LocalMovies from '@material-ui/icons/LocalMovies';
const style = {
    listItem : {
      textAlign : 'right',
    }
};

const MailFolderListItemsComponent = (props) => (
  <div>
    <div style={{ height: 100}}></div>
    
    <ListItem onClick={() => {props.history.push("/")}} button>
      <ListItemIcon>
      <HomeIcon />
      </ListItemIcon>
      <ListItemText className={props.classes.listItem} primary="صفحه اصلی" />
    </ListItem>
    {/* <ListItem onClick={() => {props.history.push("/counter")}} button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Counter" />
    </ListItem> */}
    <ListItem onClick={() => {props.history.push("/page1")}} button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText className={props.classes.listItem} primary="خط زمانی" />
    </ListItem>

  </div>
);
export  const MailFolderListItems = withStyles(style)(MailFolderListItemsComponent);

const OtherMailFolderListItemsComponent = (props) => (
  <div>
    <ListItem onClick={() => {props.history.push("/Gallery")}} button>
      <ListItemIcon>
        <CollectionsIcon />
      </ListItemIcon>
      <ListItemText className={props.classes.listItem} primary="گالری عکس" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText className={props.classes.listItem} primary="اسناد" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalMovies />
      </ListItemIcon>
      <ListItemText className={props.classes.listItem} primary="ویدئو" />
    </ListItem>
  </div>
);
export  const OtherMailFolderListItems = withStyles(style)(OtherMailFolderListItemsComponent);