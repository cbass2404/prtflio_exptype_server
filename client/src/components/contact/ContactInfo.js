// materialui
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// material icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const withStyles = makeStyles((theme) => ({
    cardWrapperStyle: {
        textAlign: 'left',
        width: '245px',
        height: '365px',
        marginTop: '8px',
    },
}));

const ContactInfo = () => {
    const classes = withStyles();

    return (
        <Card className={classes.cardWrapperStyle}>
            <CardContent>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Link
                            href="https://www.linkedin.com/in/cory-bass/"
                            underline="none"
                            target="_blank"
                            rel="noreferrer"
                            color="inherit"
                        >
                            <LinkedInIcon /> LinkedIn
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link
                            href="https://github.com/cbass2404"
                            underline="none"
                            target="_blank"
                            rel="noreferrer"
                            color="inherit"
                        >
                            <GitHubIcon /> GitHub
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link underline="none" color="inherit">
                            <PhoneIcon /> +1(318)315-1730
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link underline="none" color="inherit">
                            <EmailIcon /> cory@bass-dev.com
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link underline="none" color="inherit">
                            <LocationCityIcon /> Many, La, USA
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ContactInfo;
