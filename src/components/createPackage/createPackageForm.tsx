import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const Form = (props: any) => {
  const [ title, setTitle ] = useState(null)
  console.log(title);
  const { classes } = props
  return(
    <React.Fragment>
      <Box className={classes.root}>
        <TextField
          id="outlined-email-input"
          label="Package Title"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-email-input"
          label="Small description"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
        //  onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-email-input"
          label="Long description"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
        //  onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-email-input"
          label="Inclusions"
          type="text"
          name="Inclusions"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
        //  onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-email-input"
          label="Exclusions"
          type="text"
          name="Exclusions"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
        //  onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-email-input"
          label="Price"
          type="number"
          name="Price"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
        //  onChange={(e: any) => setTitle(e.target.value)}
        />
      </Box>
    </React.Fragment>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',

  }
})(Form)
