import { Link } from 'react-router-dom';

// materialui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'right',

        '& > *': {
            margin: theme.spacing(1),
        },
    },
    links: {
        padding: '10px 10px',
        margin: '5px',
        color: 'inherit',
        '&:hover': {
            background: '#5e17eb',
            borderRadius: '5px',
        },
    },
}));

const NavButtons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link className={classes.links} to="/projects">
                Projects
            </Link>
            <Link className={classes.links} to="/blog">
                Blog
            </Link>
            <Link className={classes.links} to="/contact">
                Contact
            </Link>
        </div>
    );
};

export default NavButtons;
