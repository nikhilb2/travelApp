import React from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const Form = (props: any) => {
  //const [ title, setTitle ] = useState(null)
  const { classes, setDetails, insertPackage } = props
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
          onChange={(e: any) => setDetails({name: e.target.value})}
        />
        <TextField
          id="outlined-email-input"
          label="Small description"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={(e: any) => setDetails({smallDescription: e.target.value})}
        />
        <TextField
          id="outlined-email-input"
          label="Long description"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={(e: any) => setDetails({description: e.target.value})}
        />
        <TextField
          id="outlined-email-input"
          label="Inclusions"
          type="text"
          name="Inclusions"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={(e: any) => setDetails({inclusions: e.target.value})}
        />
        <TextField
          id="outlined-email-input"
          label="Exclusions"
          type="text"
          name="Exclusions"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={(e: any) => setDetails({exclusions: e.target.value})}
        />
        <TextField
          id="outlined-email-input"
          label="Price"
          type="number"
          name="Price"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={(e: any) => setDetails({price: e.target.value})}
        />
        <Button onClick={insertPackage}>Insert</Button>
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
