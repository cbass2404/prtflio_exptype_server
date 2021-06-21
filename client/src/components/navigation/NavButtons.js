import { Link } from 'react-router-dom';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// components
import noImg from '../../images/no-img.png';

const useStyles = makeStyles((theme) => ({
    linksWrapper: {
        textAlign: 'right',
        display: 'flex',

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

const NavButtons = ({ auth }) => {
    const classes = useStyles();

    return (
        <div className={classes.linksWrapper}>
            <Link className={classes.links} to="/projects">
                Projects
            </Link>
            <Link className={classes.links} to="/blog">
                Blog
            </Link>
            <Link className={classes.links} to="/contact">
                Contact
            </Link>
            <a href={auth ? '/api/logout' : '/auth/google'}>
                <Avatar
                    alt="Users Google Picture"
                    src={auth ? auth.profileImage : noImg}
                />
            </a>
        </div>
    );
};

export default NavButtons;
