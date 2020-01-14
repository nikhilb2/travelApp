import React from 'react';
import { withStyles } from "@material-ui/core/styles"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'

const Table = (props: any) => {

  const { data, classes } = props

  return(
    <Box className={classes.root}>
      <div className={classes.tableHolder}>
        <Typography className={classes.heading} style={{color: 'green'}}>Inclusions</Typography>
        <div className={classes.content}>
          {data.inclusions.map((row: string) => <Typography className={classes.contentText}>{row}</Typography>)}
        </div>
      </div>
      <div className={classes.tableHolder}>
        <Typography className={classes.heading} style={{color: 'red'}}>Exclusions</Typography>
        <div className={classes.content}>
          {data.exclusions.map((row: string) => <Typography className={classes.contentText}>{row}</Typography>)}
        </div>
      </div>
    </Box>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(3)
  },
  heading: {
  //  paddingRight: theme.spacing(1),
  //  paddingLeft: theme.spacing(1)
    borderBottom: `1px solid ${theme.palette.secondary.dark}`,
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    ...theme.typography.caption,
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  contentText: {
    borderBottom: `1px solid ${theme.palette.secondary.dark}`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    ...theme.typography.caption
  },
  tableHolder: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    height: 'fit-content'

  }
})(Table)