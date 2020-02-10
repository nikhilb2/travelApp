import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import { fetchRequest } from '../../utils/request'
import ResultList from './resultList'
import Modal from '@material-ui/core/Modal';
import theme from '../../theme'
//import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const SelectPlace = (props: any) => {
  const [ keyword, setKeyword ] = useState("")
  const [ result, setResults ] = useState(Array())
  const [ modal, showModal ] = useState(false)
  const [modalStyle] = React.useState(getModalStyle)
  const { classes } = props
  const getPlaces = async (k: string) => {

    const resultPlaces = await fetchRequest(`get_places.php?keyword=${k}`, {
      method: 'GET',
    //  body: JSON.stringify(data)
    }, true)
    if (!resultPlaces.error) {
      setResults(resultPlaces.data)
    }
    console.log(result);

  }

  return(
    <div>
      <TextField
        id="outlined-email-input"
        label="Enter Place"
        type="text"
        name="text"
        //autoComplete="email"
        value={keyword}
        margin="normal"
        variant="outlined"
        onChange={ (e: any) => {
        //  console.log(e.target.value)
        setKeyword(e.target.value)
        getPlaces(e.target.value)

        }}
      />
      <ResultList data={result} showModal={(value: boolean) => showModal(value)}/>
      {/*<div><Button onClick={() => showModal(true)}>Add New</Button></div>*/}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modal}
        onClose={() => showModal(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Status</h2>
          <p id="simple-modal-description">
            Coming Soon
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default withStyles({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
})(SelectPlace)
