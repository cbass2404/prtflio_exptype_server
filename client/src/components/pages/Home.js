// materialui
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        height: '90vh',
        marginTop: '15px',
    },
}));

const Home = () => {
    const classes = useStyles();

    return <Paper className={classes.contentWrapper}>Hello from app</Paper>;
};

export default Home;
