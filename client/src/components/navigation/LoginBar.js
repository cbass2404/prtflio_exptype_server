// redux
import { connect } from 'react-redux';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    spacer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const LoginBar = ({ auth }) => {
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
            <AppBar position="static" color="dark-primary">
                <Toolbar>
                    <Button className={classes.title} color="inherit" href="/">
                        Cory Bass
                    </Button>
                    <div className={classes.spacer} />

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

export default connect(mapStateToProps)(LoginBar);
