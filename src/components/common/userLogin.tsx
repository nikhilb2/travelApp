import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SignInPopper from './signInPopper'

const UserLogin = (props: any) => {
  const { user, logOutUser, error, signInUser, registerUser } = props
  //console.log(user)
  return (
    <div>
      {user ? (
        <div style={{ display: 'flex' }}>
          <Typography>Hi! {user.name}</Typography>
          <Button
            onClick={logOutUser}>
            Logout
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <Typography>Hi</Typography>
          <SignInPopper error={error} text="Sign In" signin={signInUser} />
          <Typography>or</Typography>
          <SignInPopper
            text="Register"
            type="register"
            register={registerUser}
            error={error}
          />
        </div>
      )}
    </div>
  )
}

export default UserLogin
