import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import theme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
    [`& fieldset`]: {
      borderRadius: 40,
    },
    [`& input`]: {
      padding: '.5rem',
    },
  },
}))

const Subscribe = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          placeholder="Your e-mail here"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/static/email.svg" alt="email" />
              </InputAdornment>
            ),
          }}
        />
        <div style={{ margin: theme.spacing(1) }}>
          <Button>Subscribe</Button>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Subscribe
