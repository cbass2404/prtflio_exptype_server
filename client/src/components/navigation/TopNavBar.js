import { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';

// materialui icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

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

const NavBar = ({ auth, messages }) => {
    const classes = useStyles();
    const [unread, setUnread] = useState(0);

    const memoizedUnread = useCallback(() => {
        const unreadCount = messages.filter(
            ({ viewed }) => viewed !== true
        ).length;

        setUnread(unreadCount);
    }, [messages]);

    useEffect(() => {
        memoizedUnread();
    }, [memoizedUnread, messages]);

    const handleBadgeAuth = () => {
        if (auth && auth.admin) {
            return (
                <Badge badgeContent={unread || 0}>
                    {unread > 0 ? (
                        <NotificationsActiveIcon />
                    ) : (
                        <NotificationsIcon />
                    )}
                </Badge>
            );
        }
        return null;
    };

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

                    {handleBadgeAuth()}

                    <div className={classes.spacer}></div>

                    <NavButtons auth={auth} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    messages: state.messages,
});

export default connect(mapStateToProps)(NavBar);
