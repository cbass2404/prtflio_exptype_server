import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// components
import NavButtons from './NavButtons';
import logo from '../../images/logo.png';

const useStyles = makeStyles((theme) => ({
    appWrapper: {
        flexGrow: 1,
        marginBottom: '100px',
    },
    title: {
        marginRight: theme.spacing(2),
        height: '63px',
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
    logo: {
        height: '125px',
        marginTop: '0px',
        padding: 0,
    },
}));

const NavBar = ({ auth }) => {
    const classes = useStyles();

    return (
        <div className={classes.appWrapper}>
            <AppBar color="inherit">
                <Toolbar>
                    <Link className={classes.title} color="inherit" to="/">
                        <img
                            className={classes.logo}
                            src={logo}
                            alt="Cory Bass logo"
                        />
                    </Link>
                    <div className={classes.spacer} />
                    <NavButtons />
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(NavBar);
