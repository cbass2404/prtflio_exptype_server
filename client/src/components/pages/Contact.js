import { useState } from 'react';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import ContactInput from '../contact/ContactInput';
import ContactInfo from '../contact/ContactInfo';

const useStyles = makeStyles((theme) => ({
    contactWrapperStyle: {
        width: '50vw',
    },
    formWrapper: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    buttonStyle: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    offGray: {
        color: '#424242',
    },
}));

const Contact = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [textField, setTextField] = useState('');
    const [errors, setErrors] = useState({});

    const fields = [
        {
            errors,
            name: 'Email',
            value: email,
            fn: setEmail,
            errorMessage: 'Not a valid email',
        },
        {
            errors,
            name: 'Name',
            value: name,
            fn: setName,
            errorMessage: 'This field is required',
        },
        {
            errors,
            name: 'Reason',
            value: textField,
            fn: setTextField,
            errorMessage: 'This field is required',
        },
    ];

    const mapFields = () =>
        fields.map(({ errors, name, value, fn, errorMessage }) => {
            return (
                <ContactInput
                    errors={errors}
                    name={name}
                    value={value}
                    fn={fn}
                    errorMessage={errorMessage}
                />
            );
        });

    return (
        <Grid
            className={classes.contactWrapperStyle}
            container
            direction="column"
            justify="center"
        >
            <Grid item>
                <Typography
                    variant="h4"
                    align="right"
                    className={classes.offGray}
                >{`< contact me >`}</Typography>
            </Grid>
            <Grid item container direction="row" justify="space-evenly">
                <Grid item>
                    <ContactInfo />
                </Grid>
                <Grid item>
                    <form className={classes.formWrapper}>
                        {mapFields()}

                        <Button
                            variant="contained"
                            color="inherit"
                            className={classes.buttonStyle}
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contact;
