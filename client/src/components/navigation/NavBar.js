// materialui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'right',
        marginRight: '14px',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact Me</Button>
            <Button color="inherit">Blog</Button>
        </div>
    );
};

export default NavBar;
