// materialui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// components
import ProjectItem from '../projects/ProjectItem';

const useStyles = makeStyles((theme) => ({
    contactWrapperStyle: {
        width: '50vw',
    },
    formWrapper: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    buttonStyle: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    offGray: {
        color: '#424242',
    },
}));

const Projects = () => {
    const classes = useStyles();

    const projectItems = [1, 2, 3, 4, 5, 6, 7, 8];

    const mapItems = () =>
        projectItems.map((item) => <ProjectItem key={item} />);

    return (
        <Grid
            className={classes.contactWrapperStyle}
            container
            direction="column"
            justify="center"
        >
            <Grid item>
                <Typography
                    variant="h4"
                    align="right"
                    className={classes.offGray}
                >{`< projects >`}</Typography>
            </Grid>
            <Grid item>search parameters</Grid>
            <Grid item container direction="column" justify="space-evenly">
                {mapItems()}
            </Grid>
        </Grid>
    );
};

export default Projects;
