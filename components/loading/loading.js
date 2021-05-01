import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate(props) {
    const {load}=props
  const classes = useStyles();
    if (load){
        return (
    <div className={classes.root} align='middle'>
      <CircularProgress />

    </div>
  );
    }
    return (
        <div></div>
    )

}