import { useState } from 'react';
import axios from 'axios';

// materialui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import ContactInput from '../contact/ContactInput';
import ContactInfo from '../contact/ContactInfo';
import { validateTextInput, validateEmail } from '../utils/validate';

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
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        Email: '',
        Name: '',
        Message: '',
    });
    const [notValid, setNotValid] = useState(true);

    const fields = [
        {
            name: 'Email',
            value: email,
            fn: setEmail,
            errorMessage: 'This must be filled in',
        },
        {
            name: 'Name',
            value: name,
            fn: setName,
            errorMessage: 'This must be filled in',
        },
        {
            name: 'Message',
            value: message,
            fn: setMessage,
            errorMessage: 'This must be filled in',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        validateTextInput(fields, setErrors);
        validateEmail(email, setErrors, setNotValid);

        if (notValid) {
            return;
        }

        const contactRequest = {
            email,
            name,
            message,
        };

        axios
            .post('/api/messages', contactRequest)
            .then((res) => res.data)
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err);
                // setResponse('Something went wrong');
            });
    };

    const mapFields = () =>
        fields.map(({ name, value, fn }) => {
            return (
                <ContactInput
                    key={name}
                    errors={errors}
                    name={name}
                    value={value}
                    fn={fn}
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
                    <form
                        className={classes.formWrapper}
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        {mapFields()}

                        <Button
                            variant="contained"
                            color="inherit"
                            className={classes.buttonStyle}
                            type="submit"
                            // disabled={!email || !name || !message}
                        >
                            Submit
                        </Button>
                    </form>

                    {/* {response} */}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contact;
