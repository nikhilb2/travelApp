import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TravelCard from './travelCard'

const TravelCardsConatainer = (props: any) => {
  const { classes, data, edit, deletePacakage } = props
  return (
    <div className={classes.root}>
      {data &&
        data.map((item: any) => (
          <div key={item.id}>
            <TravelCard
              edit={edit}
              data={item}
              deletePacakage={() => deletePacakage(item.id)}
            />
          </div>
        ))}
    </div>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
})(TravelCardsConatainer)
