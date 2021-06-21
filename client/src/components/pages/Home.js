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
    },
    profileImgStyle: {
        width: '100%',
        border: '1px solid #424242',
    },
    gridItem: {
        width: '300px',
        flexGrow: 1,
        textAlign: 'left',
    },
    offGray: {
        color: '#424242',
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
            <Grid
                container
                item
                className={classes.gridItem}
                direction="column"
                spacing={0}
            >
                <Grid item>
                    <Typography
                        variant="h4"
                        align="right"
                        className={classes.offGray}
                    >{`< about me >`}</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">
                        <span className={classes.highlight}>{`<bold>`}</span>
                        Hello!
                        <span className={classes.highlight}>{`</bold>`}</span>
                    </Typography>

                    <Typography variant="body1">
                        <span className={classes.highlight}>I'm Cory, </span>
                        fullstack
                        <br />
                        web developer.
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body1">
                        I love to learn new things and accept challenging
                        projects. Above all things I value a good team and being
                        a valuable member of that team. I have a great attitude
                        and feel like I would be an excellent addition to any
                        workforce.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h4"
                        align="right"
                        className={classes.offGray}
                    >{`< tech skills >`}</Typography>
                </Grid>

                <Grid container item>
                    <Grid item>
                        <ul>
                            <li>Javascript</li>

                            <li>ReactJS</li>

                            <li>React Native</li>

                            <li>Redux</li>
                        </ul>
                    </Grid>

                    <Grid item>
                        <ul>
                            <li>NodeJS</li>

                            <li>ExpressJS</li>

                            <li>Typescript</li>

                            <li>MongoDB</li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <ul>
                            <li>GraphQL/Apollo</li>

                            <li>Python 3</li>

                            <li>Google Cloud</li>

                            <li>Git</li>
                        </ul>
                    </Grid>

                    <Grid item>
                        <ul>
                            <li>HTML5</li>

                            <li>CSS3</li>

                            <li>SCSS/SASS</li>

                            <li>Flex/Grid</li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography
                        variant="h4"
                        align="right"
                        className={classes.offGray}
                    >{`< soft skills >`}</Typography>
                </Grid>

                <Grid container item spacing={0}>
                    <Grid item>
                        <ul>
                            <li>good attitude</li>

                            <li>strong listener</li>

                            <li>critical thinking</li>
                        </ul>
                    </Grid>

                    <Grid item>
                        <ul>
                            <li>focus</li>

                            <li>adaptability</li>

                            <li>love of challenges</li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography
                        variant="h4"
                        align="right"
                        className={classes.offGray}
                    >{`< hobbies >`}</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body1">
                        I enjoy playing Irish folk music on my mandolin, playing
                        survival games and simulators, trying out new VR games
                        as they come out, playing board games with my children,
                        reading fantasy series, researching and learning new
                        things. In the evenings I enjoy playing through the{` `}
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
