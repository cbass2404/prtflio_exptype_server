// redux
import { connect } from 'react-redux';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Button from '@material-ui/core/Button';

// components
import AvatarImage from './AvatarImage';

const useStyles = makeStyles((theme) => ({
    appWrapper: {
        flexGrow: 1,
    },
    title: {
        marginRight: theme.spacing(2),
    },
    links: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
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
                        Login with Google
                    </Button>
                );
            default:
                return (
                    <Button color="inherit" href="/api/logout">
                        {`Welcome ${auth.displayName}`}
                    </Button>
                );
        }
    };

    return (
        <div className={classes.appWrapper}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Button className={classes.title} color="inherit" href="/">
                        Cory Bass
                    </Button>
                    <div className={classes.links}>
                        <ButtonGroup
                            color="inherit"
                            aria-label="outlined primary button group"
                        >
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </div>

                    {renderAuthFlow()}

                    <AvatarImage />
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(NavBar);
