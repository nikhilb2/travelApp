import React, { useState, useRef } from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SelectPlace from "../places/selectPlace";
import theme from "../../theme";

const Form = (props) => {
  //const [ title, setTitle ] = useState(null)
  const longDesref = useRef()
  const longDesTitleref = useRef()
  const { classes, setDetails, insertPackage, details, select } = props;
  const [exc, setExc] = useState("");
  const [inc, setInc] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTitle, setDescriptionTitle] = useState("");
  //console.log(details);
  const incNExc = (string, type) => {
    if (type === "inclusions") {
      if (details.inclusions.length > 1) {
        return details.inclusions + "#" + string;
      } else {
        return string;
      }
    }

    if (type === "exclusions") {
      if (details.exclusions.length > 1) {
        return details.exclusions + "#" + string;
      } else {
        return string;
      }
    }
    if (type === "description") {
      if (details.description.length > 1) {
        return details.description + "#" + string;
      } else {
        return string;
      }
    }
  };

  const splitIncExc = (string) => {
    if (string.includes("#")) {
      return string.split("#");
    } else {
      return [string];
    }
  };

  return (
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
          onChange={(e) => {
            //console.log(e.target.value)
            setDetails({ name: e.target.value });
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
          onChange={(e) =>
            setDetails({ smallDescription: e.target.value })
          }
        />
        <Box boxShadow={3} className={classes.box}>
        <Typography className={classes.desTitle}>
          Long description
        </Typography>
        <TextField
          id="outlined-email-input"
          label="Title"
          type="text"
          name="text"
          //autoComplete="email"
          margin="normal"
          variant="outlined"
          inputRef={longDesTitleref}
          value={descriptionTitle}
          onChange={(e) => setDescriptionTitle(e.target.value)}
          onKeyDown={async (e) => {
            if (e.keyCode == 13) {
              longDesref.current.focus()
          }}
        }
        />
        <TextField
          id="outlined-email-input"
          label="description"
          type="text"
          name="text"
          //autoComplete="email"
          style={{marginLeft: 12}}
          inputRef={longDesref}
          margin="normal"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={async (e) => {
            if (e.keyCode == 13) {
              await setDetails({
                description: incNExc(descriptionTitle + '%$' + description, "description"),
              });
              setDescriptionTitle("");
              setDescription("");
              longDesTitleref.current.focus()
              // put the login here
            }
          }}
        />
        <Button
          style={{marginTop: 20, marginLeft: 10}}
          onClick={async () => {
            await setDetails({
              description: incNExc(descriptionTitle + '%$' + description, "description"),
            });
            setDescriptionTitle("");
            setDescription("");
          }}
        >
          Add
        </Button>
        <Box className={classes.incNExc}>
          {splitIncExc(details.description).map(
            (description, i) => {
                const descriptionSplit = description.split('%$')
                return(
                  <div key={"des" + i} className={classes.incExcHolder}>
                    <Typography className={classes.textIncExc}>
                      <Typography style={{fontWeight: 'bold'}}>
                      {descriptionSplit[0]}
                      </Typography>
                      {descriptionSplit[1]}
                    </Typography>
                  </div>
                )
            }
          )}
        </Box>
        </Box>
        <Box className={classes.incNExc}>
          <TextField
            id="outlined-email-input"
            label="Inclusions"
            type="text"
            name="Inclusions"
            //autoComplete="email"
            margin="normal"
            variant="outlined"
            onKeyDown={async (e) => {
              if (e.keyCode == 13) {
                await setDetails({
                  inclusions: incNExc(inc, "inclusions"),
                });
                setInc("");
              }
            }}
            value={inc}
            onChange={(e) => setInc(e.target.value)}
          />
          <Button
            onClick={async () => {
              await setDetails({
                inclusions: incNExc(inc, "inclusions"),
              });
              setInc("");
            }}
          >
            Add
          </Button>
        </Box>
        <Box className={classes.incNExc}>
          {splitIncExc(details.inclusions).map((inc, i) => (
            <div key={"inc" + i} className={classes.incExcHolder}>
              <Typography className={classes.textIncExc}>{inc}</Typography>
            </div>
          ))}
        </Box>
        <Box className={classes.incNExc}>
          <TextField
            id="outlined-email-input"
            label="Exclusions"
            type="text"
            name="Exclusions"
            //autoComplete="email"
            onKeyDown={async (e) => {
              if (e.keyCode == 13) {
                await setDetails({
                  exclusions: incNExc(exc, "exclusions"),
                });
                setExc("");
              }
            }}
            margin="normal"
            variant="outlined"
            value={exc}
            onChange={(e) => setExc(e.target.value)}
          />
          <Button
            onClick={async () => {
              await setDetails({
                exclusions: incNExc(exc, "exclusions"),
              });
              setExc("");
            }}
          >
            Add
          </Button>
        </Box>
        <Box className={classes.incNExc}>
          {splitIncExc(details.exclusions).map((exc, i) => (
            <div key={"exc" + i} className={classes.incExcHolder}>
              <Typography className={classes.textIncExc}>{exc}</Typography>
            </div>
          ))}
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
          onChange={(e) => setDetails({ price: e.target.value })}
        />
        <SelectPlace select={select} />
        <Button onClick={insertPackage}>Insert</Button>
      </Box>
    </React.Fragment>
  );
};

export default withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  incNExc: {
    display: "flex",
    flexDirection: "row",
  },
  textIncExc: {
    marginRight: theme.spacing(1),
  },
  incExcHolder: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  desTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  box: {
    padding: 10,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
  }
})(Form);
