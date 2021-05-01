import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',

    '& > * + *': {
      marginTop: theme.spacing(10),
    },
  },
}));
function ShowAlert(props){
  const classes = useStyles();
  const {message}=props
return(
    <div align='middle'>
        <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>{message}</AlertTitle>

      </Alert>
    </div>
    </div>

)

}
export default ShowAlert