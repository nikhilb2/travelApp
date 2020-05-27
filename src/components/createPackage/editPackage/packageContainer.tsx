import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
//import Typography from '@material-ui/core/Typography'
import ImageViewer from './imageViewer'
import { fetchRequest } from '../../../utils/request'
import PackageDescription from './packageDescription'
import TextField from '@material-ui/core/TextField'
import theme from '../../../theme'
import Button from "@material-ui/core/Button";
import Dialog from '../../common/dialog'

const PackageContainer = (props: any) => {
  const { classes, pack } = props

    const sortDescription = () => {
      const descriptionSorted = pack.description.split('#*')
      if (descriptionSorted) {
        const result = Array()
        descriptionSorted.forEach((element: any) => {
          result.push(element.split('%$'))
        });

        return result

    }
    return []
    }



  const [ description, setDescription ] = useState(sortDescription())
  const [ inclusions , setInclusions ] = useState(pack.inclusions.split('#*'))
  const [ exclusions, setExclusions ] = useState(pack.exclusions.split('#*'))
  const [ name, setName ] = useState(pack.name)
  const [ smallDescription, setSmallDescription ] = useState(pack.smallDescription)
  const [ price, setPrice ] = useState(pack.price)
  //const [ alert, showAlert ] = useState(false)
  //const [ loader, setLoader ] = useState(false)
  const [ message, setMessage ] = useState('')
  //console.log(message);
  //console.log(alert);
  //console.log(loader);

  const editPackage = async (data: any) => {

      //setLoader(true)
        const editP = await fetchRequest('edit_package.php', {
          method: 'POST',
          body: JSON.stringify(data)
        }, true)

        if (editP.message === 'success') {
          setMessage('Package updated successfully')
        } else if (editP.error) {
          //setLoader(false)
          setMessage(editP.error)
        //  showAlert(true)
        }




  }

  const descriptionFormation =  (des: any) => {
    let descriptionString = ''
     des.forEach((element: any, i: number) => {
      if (des.length > (i + 1)) {
        //console.log(element);

        descriptionString =  descriptionString + element[0] + '%$' + element[1] + '#*'
      } else {
        descriptionString = descriptionString + element[0] + '%$' + element[1]
      //  console.log(descriptionString);

      }
    })
    //console.log('pack.description');
    //console.log(pack.description);

    //console.log('descriptionString');
    //console.log(descriptionString);

    return descriptionString
  }

  const incExcFormation = (array: any) => {
    let string = ''
    array.forEach((element: string, i: number) => {
      if (array.length - 1 > (i)) {
        string  = string + element + '#*'
      } else {
        string  = string + element
      }
      console.log('pack.inclusions');
      console.log(pack.inclusions);
      console.log('string');
      console.log(string);

    })
    return string
  }
  return(
    <Box className={classes.root}>
      <article>
        <section>
          <Box boxShadow={4} className={classes.imageAndDescriptionContainer}>
            <Box className={classes.leftSide}>
              <ImageViewer images={pack.images} />
            </Box>
            <Box className={classes.rightSide}>
              <PackageDescription pack={pack} inclusions={inclusions} exclusions={exclusions} setExclusions={setExclusions} setInclusions={setInclusions} name={name} setName={setName} smallDescription={smallDescription} setSmallDescription={setSmallDescription} price={price} setPrice={setPrice}/>
            </Box>
          </Box>
        </section>
        <section>
          <Box boxShadow={4} className={classes.description}>
            {description ? description.map((item:any, i: number) => {
              return(
                <Box key={"des" + i} boxShadow={1} style={{padding: theme.spacing(2), margin: theme.spacing(2)}}>
                <TextField
                  className={classes.descriptionText}
                   id="descriptiontitlefield"
                   label="Title"
                   multiline
                   value={item[0]}
                   onChange={(e: any) => {
                     const oldDescription = [...description]
                     oldDescription[i][0] = e.target.value
                     setDescription(oldDescription)
                   }}
                 />
                 <TextField
                   className={classes.descriptionText}
                    id="descriptiontextfield"
                    label="Details"
                    multiline
                    value={item[1]}
                    onChange={(e: any) => {
                      const oldDescription = [...description]
                      oldDescription[i][1] = e.target.value
                      setDescription(oldDescription)
                    }}
                  />
                </Box>
              )
            }) : null}
            <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button
              style={{marginTop: 20, backgroundColor: theme.palette.primary.main}}
              onClick={ () => {
                const data: any = {
                  name: name,
                  id: pack.id
                }
                const des = descriptionFormation(description)
                const inc = incExcFormation(inclusions)
                const exc = incExcFormation(exclusions)


                if (pack.description != des) {
                  data.description = des
                }
                if (pack.smallDescription != smallDescription) {
                  data.smallDescription = smallDescription
                }
                if (pack.price != price) {
                  data.price = price
                }
                if (pack.inclusions != inc) {
                  data.inclusions = inc
                }
                if (pack.exclusions != exc) {
                  data.exclusions = exc
                }
               editPackage(data)


              }}
            >
              Update
            </Button>
            </Box>
          </Box>
        </section>
      </article>
            <Dialog open={message} title={`Update package`} detail={message} onConfirm={() => setMessage('')}/>
    </Box>
  )
}

export default withStyles({
  root: {
    width: '95%'
  },
  imageAndDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%'
    },
    justifyContent: 'space-around',
    padding: theme.spacing(4),
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(2)
  },
  leftSide: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  rightSide: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    width: '60%'
  },
  description: {
    margin: theme.spacing(1),
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  descriptionText: {
    padding: theme.spacing(1),
    width: '100%'
  },
  detailsHeading: {
  //  paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  }
})(PackageContainer)
