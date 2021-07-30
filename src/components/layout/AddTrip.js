import React, { useState } from "react";
import { purple } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import cities from "./cities";
import {
  StateDropdown,
  RegionDropdown,
} from "react-indian-state-region-selector";
import Select from "react-select";
import classes from "../../styles/AddTrip.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  switchBase: {
    color: "red",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [roundTrip, setRoundTrip] = useState(false);
  const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      "&$checked": {
        color: purple[500],
      },
      "&$checked + $track": {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes1 = useStyles();
  const [newTrip, setNewTrip] = useState({
    userId: localStorage.getItem("userId"),
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    twoWay: false,
    transport: "",
  });

  const newTripChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewTrip((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
    console.log(name, value);
  };

  const fromCityChangeHandler = (e) => {
    const value = e.value;
    setNewTrip((p) => {
      return {
        ...p,
        from: value,
      };
    });
  };
  const toCityChangeHandler = (e) => {
    const value = e.value;
    setNewTrip((p) => {
      return {
        ...p,
        to: value,
      };
    });
  };
  const transportChangeHandler = (e) => {
    const value = e.value;
    setNewTrip((p) => {
      return {
        ...p,
        transport: value,
      };
    });
  };

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setRoundTrip(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const transports = [
    {
      label: "Flight",
      value: "Flight",
    },
    {
      label: "Train",
      value: "Train",
    },
    {
      label: "Bus",
      value: "Bus",
    },
    {
      label: "Cab",
      value: "Cab",
    },
    {
      label: "Own Vehicle",
      value: "Own Vehicle",
    },
  ];

  const addNewTrip = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{
          marginTop: "20px",
          backgroundColor: "rgb(42, 187, 172)",
          color: "white",
        }}
        onClick={handleClickOpen}
      >
        Add New Trip
      </Button>
      <Dialog
        style={{}}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.addTripModal}>
          <DialogTitle
            id="form-dialog-title"
            style={{ fontWeight: "600", color: "rgb(42, 187, 172)" }}
          >
            Add Trip
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add new trip and find new friends to travel with...
            </DialogContentText>
            <DialogContentText>
              When preparing to travel, lay out all your clothes and all your
              money. Then take half the clothes and twice the money.
            </DialogContentText>
            <br></br>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <Typography>Start Point</Typography>
                <Select
                  name="from"
                  options={cities}
                  isSearchable
                  onChange={fromCityChangeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <Typography>End Point</Typography>
                <Select
                  name="to"
                  value={newTrip.to}
                  options={cities}
                  isSearchable
                  onChange={toCityChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Preferred Transport</Typography>
                <Select
                  name="transport"
                  value={newTrip.from}
                  options="transport"
                  isSearchable
                  onChange={transportChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "flex" }}>
                  <p>One Way</p>
                  <Switch
                    onChange={handleChange}
                    checked={state.checkedB}
                    color="primary"
                    style={{ color: "rgba(42, 187, 172)" }}
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  <p>Round Trip</p>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography>Start Date</Typography>
                <TextField
                  id="date"
                  name="startDate"
                  value={newTrip.startDate}
                  variant="outlined"
                  type="date"
                  defaultValue="2021-08-24"
                  className={classes1.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={newTripChangeHandler}
                />
              </Grid>
              {roundTrip && (
                <Grid item xs={12} lg={6}>
                  <Typography>Return Date</Typography>
                  <TextField
                    name="endDate"
                    value={newTrip.endDate}
                    id="date"
                    onChange={newTripChangeHandler}
                    variant="outlined"
                    type="date"
                    defaultValue="2021-08-30"
                    className={classes1.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{
                color: "rgb(42, 187, 172)",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={addNewTrip}
              style={{
                color: "rgb(42, 187, 172)",
              }}
            >
              Add
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
