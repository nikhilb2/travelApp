import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    button: {
      width: '100%'
    }
  }),
);

export default function AlignItemsList(props: any) {
  const classes = useStyles();
  const { data, showModal, addNew, selectItem } = props
  return (
    <List className={classes.root}>
      {data.map((item: any, i: number) => <div key={item.id}>
        <Button className={classes.button} onClick={() => selectItem(item)}>
          <ListItem alignItems="flex-start">
            {item.image &&
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src= {"https://zefiri.com/travel-api/" + item.image}/>
            </ListItemAvatar>
          }
            <ListItemText
              primary={item.place ? item.place : ""}
              secondary={
                <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {item.country}
                    </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Button>
        {data.length + 1 >  i && <Divider variant="inset" component="li" />}
      </div>)}
      {addNew &&
        <Button onClick={() => showModal(true)}>Add New Place</Button>
      }
    </List>
  );
}
