import { useState } from 'react';
import axios from 'axios';

// redux
import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions/messageActions';

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

const Contact = ({ addMessage }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [responseColor, setResponseColor] = useState('inherit');
    const [errors, setErrors] = useState({
        Email: '',
        Name: '',
        Message: '',
    });

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

    const handleValidation = (e) => {
        e.preventDefault();

        const input = validateTextInput(fields, setErrors);

        if (!input) {
            return;
        }

        const validEmail = validateEmail(email, setErrors);

        if (!validEmail) {
            return;
        }

        handleSubmit();
    };

    const handleSubmit = () => {
        const contactRequest = {
            email,
            name,
            message,
        };

        axios
            .post('/api/messages', contactRequest)
            .then((res) => res.data)
            .then((data) => {
                addMessage(data);

                setResponse('I will contact you soon!');
                setResponseColor('inherit');
                setEmail('');
                setName('');
                setMessage('');
                setErrors({ Email: '', Name: '', Message: '' });
            })
            .catch((err) => {
                console.error(err);
                setResponse('Something went wrong...');
                setResponseColor('error');
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
                        onSubmit={(e) => handleValidation(e)}
                    >
                        {mapFields()}

                        <Button
                            variant="contained"
                            color="inherit"
                            className={classes.buttonStyle}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>

                    <Typography color={responseColor} variant="body1">
                        {response}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default connect(null, { addMessage })(Contact);
