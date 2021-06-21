import { useEffect } from 'react';

// materialui
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const ContactInput = ({ errors, name, value, fn }) => {
    // useEffect(() => {
    //     console.log('errors updated');
    // }, [errors]);

    return (
        <div>
            <TextField
                variant="outlined"
                value={value}
                onChange={(e) => fn(e.target.value)}
                label={name}
                multiline={name === 'Message'}
                rows={4}
            />
            <Typography variant="h6" color="error">
                {errors[name]}
            </Typography>
        </div>
    );
};

export default ContactInput;
