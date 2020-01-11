import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
//import ButtonComp from './button'
//import theme from '../../theme'
import { withStyles } from '@material-ui/styles'
//import { decoratedUrl, decoratedOptions } from '../utils/request'
//import { saveAuth, saveUserDetails, getUserDetails } from '../utils/auth'


type Props = {
  // using `interface` is also ok
  classes: any
  style?: any
  bgcolor?: any
  register?: any
  error?: any
}
type State = {
  email?: any
  password?: any
  name?: any
  result?: any
};


class Register extends Component<Props, State> {
  state = {
    name: null,
    email: null,
    password: null
  }

  render() {
    const { style, bgcolor, classes, register, error } = this.props
  //  const { result } = this.state
    //console.log(this.props)
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
          <img className={classes.logo} src="static/bmc.png" alt="shopmate" />
        </div>
        <div>
          <TextField
            id="outlined-name-input"
            label="Name"
            className={classes.textField}
            type="text"
            name="name"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ email: e.target.value })}
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
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div id="registerButton" style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => register(this.state)}>
            Register
          </Button>
        </div>
        <div>{error ? error.error.message : null}</div>
      </Box>
    )
  }
}

export default withStyles({
  logo: {
    width: '100px'
  }
})(Register)
