import { useState } from 'react';

// materialui
import { makeStyles } from '@material-ui/core/styles';

// components
import ContactInput from '../contact/ContactInput';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
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

    return <form className={classes.formWrapper}>{mapFields()}</form>;
};

export default Contact;
