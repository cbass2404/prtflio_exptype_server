// redux
import { connect } from 'react-redux';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// components
import AvatarImage from './AvatarImage';
import ThemeSwitch from './ThemeSwitch';

const useStyles = makeStyles((theme) => ({
    appWrapper: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = ({ auth }) => {
    const classes = useStyles();

    const renderAuthFlow = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <Button color="inherit" href="/auth/google">
                        Login
                    </Button>
                );
            default:
                return (
                    <Button color="inherit" href="/api/logout">
                        Logout
                    </Button>
                );
        }
    };

    console.log(auth);

    return (
        <div className={classes.appWrapper}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cory Bass
                    </Typography>

                    {renderAuthFlow()}

                    <AvatarImage />
                    <ThemeSwitch />
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(NavBar);
