import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import SelectPlace from '../places/selectPlace'
import theme from '../../theme'

const Form = (props: any) => {
  //const [ title, setTitle ] = useState(null)
  const { classes, setDetails, insertPackage, details } = props
  const [ exc, setExc ] = useState('')
  const [ inc, setInc ] = useState('')
  //console.log(details);
  const incNExc = (string: string, type: string) => {
    if (type === 'inclusions') {
      if (details.inclusions.length > 1) {
        return details.inclusions + "#" + string
      } else {
        return string
      }
    } else {
      if (details.exclusions.length > 1) {
        return details.exclusions + "#" + string
      } else {
        return string
      }
    }
  }

  const splitIncExc = (string: string) => {
    if (string.includes('#')) {
      return string.split('#')
    } else {
      return [string]
    }
  }

  return(
    <React.Fragment>
      <Box className={classes.root}>
        <TextField
          id="outlined-email-input"
          label="Package Title"
          type="text"
          name="text"
          //autoComplete="email"
          value={details.name}
          margin="normal"
          variant="outlined"
          onChange={(e: any) => {
            //console.log(e.target.value)
            setDetails({name: e.target.value})
          }}
        />
        <TextField
          id="outlined-email-input"
          label="Small description"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          value={details.smallDescription}
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
          value={details.description}
          onChange={(e: any) => setDetails({description: e.target.value})}
        />
        <Box className={classes.incNExc}>
          <TextField
            id="outlined-email-input"
            label="Inclusions"
            type="text"
            name="Inclusions"
            //autoComplete="email"
            margin="normal"
            variant="outlined"
            value={inc}
            onChange={(e: any) => setInc(e.target.value)}
          />
          <Button onClick={async () => {
            await setDetails({
              inclusions: incNExc(inc, "inclusions")
            })
            setInc('')
          }}>Add</Button>
        </Box>
        <Box className={classes.incNExc}>
          {splitIncExc(details.inclusions).map((inc: string, i: number) => <div key={"inc" + i} className={classes.incExcHolder}><Typography className={classes.textIncExc}>{inc}</Typography></div>)}
        </Box>
        <Box className={classes.incNExc}>
          <TextField
            id="outlined-email-input"
            label="Exclusions"
            type="text"
            name="Exclusions"
            //autoComplete="email"
            margin="normal"
            variant="outlined"
            value={exc}
            onChange={(e: any) => setExc(e.target.value)}
          />
          <Button onClick={async () => {

            await setDetails({
              exclusions: incNExc(exc, "exclusions")
            })
            setExc('')
          }}>Add</Button>
        </Box>
        <Box className={classes.incNExc}>
          {splitIncExc(details.exclusions).map((exc: string, i: number) => <div key={"exc" + i} className={classes.incExcHolder}><Typography className={classes.textIncExc}>{exc}</Typography></div>)}
        </Box>
        <TextField
          id="outlined-email-input"
          label="Price"
          type="number"
          name="Price"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          value={details.price}
          onChange={(e: any) => setDetails({price: e.target.value})}
        />
        <SelectPlace />
        <Button onClick={insertPackage}>Insert</Button>
      </Box>
    </React.Fragment>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  incNExc: {
    display: 'flex',
    flexDirection: 'row'
  },
  textIncExc: {
    marginRight: theme.spacing(1),
  },
  incExcHolder: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})(Form)
