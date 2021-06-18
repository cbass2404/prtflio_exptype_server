// materialui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// components
import aboutMeImg from '../../images/aboutMe.jpg';

const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        flexGrow: 1,
        marginTop: '30px',
    },
    cardStyle: {
        height: '275px',
    },
    profileImgStyle: {
        height: '100%',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.homeWrapper}
            spacing={2}
            justify="space-evenly"
        >
            <Grid item>1</Grid>
            <Grid item>
                <Paper className={classes.cardStyle}>
                    <img
                        src={aboutMeImg}
                        className={classes.profileImgStyle}
                        alt="Cory and his daughter"
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Home;
