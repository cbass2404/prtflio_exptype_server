// materialui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../styles/theme';

// components
import aboutMeImg from '../../images/aboutMe.jpg';

const useStyles = makeStyles((theme) => ({
    palette: {
        type: 'dark',
    },
    homeWrapper: {
        flexGrow: 1,
        marginTop: '30px',
    },
    profileImgStyle: {
        width: '100%',
        border: '1px solid #424242',
        borderRadius: '360px',
    },
    gridItem: {
        width: '300px',
        flexGrow: 1,
    },
    offGray: {
        color: '#424242',
        margin: '15px 0',
    },
    highlight: {
        color: '#5e17eb',
        fontWeight: 700,
    },
}));

const Home = () => {
    const classes = useStyles({ ...theme });

    return (
        <Grid
            container
            className={classes.homeWrapper}
            spacing={2}
            justify="space-evenly"
        >
            <Grid item className={classes.gridItem}>
                <Typography
                    variant="h4"
                    align="right"
                    className={classes.offGray}
                >{`< about me >`}</Typography>

                <Typography variant="subtitle1">
                    <span className={classes.highlight}>{`<bold>`}</span>
                    Hello!
                    <span className={classes.highlight}>{`</bold>`}</span>
                </Typography>
                <Typography variant="body">
                    <span className={classes.highlight}>I'm Cory, </span>
                    fullstack
                    <br />
                    web developer.
                </Typography>
                <br />
                <br />
                <Typography variant="body">
                    I love to learn new things and accept challenging projects.
                    Above all things I value a good team and being a valuable
                    member of that team. I have a great attitude and feel like I
                    would be an excellent addition to any workforce.
                </Typography>
                <Typography
                    variant="h4"
                    align="right"
                    className={classes.offGray}
                >{`< tech skills >`}</Typography>
                <Typography
                    variant="h4"
                    align="right"
                    className={classes.offGray}
                >{`< soft skills >`}</Typography>
                <Typography
                    variant="h4"
                    align="right"
                    className={classes.offGray}
                >{`< hobbies >`}</Typography>
                <Typography variant="body">
                    I enjoy playing Irish folk music on my mandolin, playing
                    survival games and simulators, trying out new VR games as
                    they come out, playing board games with my children, reading
                    fantasy series, researching and learning new things. In the
                    evenings I enjoy playing through the{` `}
                    <a
                        className={classes.highlight}
                        href="https://www.codewars.com/users/cbass07"
                        target="_blank"
                        rel="noreferrer"
                    >
                        codewars challenge website.
                    </a>
                </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
                <img
                    src={aboutMeImg}
                    className={classes.profileImgStyle}
                    alt="Cory and his daughter"
                />
            </Grid>
        </Grid>
    );
};

export default Home;
