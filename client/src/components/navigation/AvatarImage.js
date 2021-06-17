import { connect } from 'react-redux';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

//components
import noImg from '../../images/no-img.png';

const useStyles = makeStyles((theme) => ({
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const AvatarImage = ({ auth }) => {
    const classes = useStyles();

    const renderImage = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return noImg;
            default:
                return auth.profileImage;
        }
    };

    return (
        <div className={classes.avatar}>
            <Avatar alt="Default Profile Image" src={renderImage()} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(AvatarImage);
