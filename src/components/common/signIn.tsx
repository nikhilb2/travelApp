import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
//import ButtonComp from './button'
//import theme from '../theme'
import { withStyles } from '@material-ui/styles'

type Props = {
  // using `interface` is also ok
  classes: any
  style?: any
  bgcolor?: string
  color?: string
  signin: any
  error?: string
}
type State = {
  email?: any
  password?: any
}

class SignIn extends Component<Props, State> {
  state = {
    email: null,
    password: null,
  }
  render() {
    const { style, bgcolor, classes, signin, error } = this.props
    return (
      <Box
        boxShadow={5}
        bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
        m={1}
        p={1}
        style={style}
        className={classes.box}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img className={classes.logo} src="/static/bmc.png" alt="shopmate" />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div
          id="signInButton"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button onClick={() => signin(this.state)}>Sign In</Button>
        </div>
        {error ? error : null}
      </Box>
    )
  }
}

export default withStyles({
  logo: {
    width: '100px',
  },
})(SignIn)
