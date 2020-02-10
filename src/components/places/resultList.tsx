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
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export default function AlignItemsList(props: any) {
  const classes = useStyles();
  const { data, showModal } = props
  return (
    <List className={classes.root}>
      {data.map((item: any, i: number) => <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src= {"https://zefiri.com/travel-api/" + item.image}/>
          </ListItemAvatar>
          <ListItemText
            primary={item.place}
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
        {data.length - 1 <  i && <Divider variant="inset" component="li" />}
      </div>)}

      <Button onClick={() => showModal(true)}>Add New</Button>
    </List>
  );
}
