import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classes1 from "../../../styles/SelfTripCard.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import SpeedDial from "../../layout/SpeedDial";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 0",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleClick = (e) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes1.header}>
          <Typography className={classes.title} color="white" gutterBottom>
            {props.twoWay ? "Round Trip" : "One Way Trip"}
          </Typography>
        </div>
        <Typography variant="h5" component="h2" className={classes1.route}>
          <p className={classes1.from}>{props.from}</p>{" "}
          <p>
            {!props.twoWay ? (
              <ArrowRightAltIcon
                style={{ color: "rgb(42, 187, 172)", fontSize: "3rem" }}
              />
            ) : (
              <SyncAltIcon
                style={{ color: "rgb(42, 187, 172)", fontSize: "3rem" }}
              />
            )}
          </p>{" "}
          <p className={classes1.from}>{props.to}</p>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Preffering by {props.transport}
        </Typography>
        <Typography variant="body2" component="p">
          Number of people: {props.noOfPeople}
          <br />
        </Typography>
      </CardContent>
      <Button size="small">Learn More</Button>
      <CardActions>
        <SpeedDial handleClick={handleClick} delete={props.delete} />
      </CardActions>
    </Card>
  );
}
