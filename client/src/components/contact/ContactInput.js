// materialui
import TextField from '@material-ui/core/TextField';

const ContactInput = ({ errors, name, value, fn, errorMessage }) => {
    return (
        <div>
            <TextField
                color="inherit"
                variant="outlined"
                value={value}
                onChange={(e) => fn(e.target.value)}
                label={name}
                required
                error={errors[name]}
                multiline={name === 'Reason'}
                rows={4}
            />
            {errors[name] && errorMessage}
        </div>
    );
};

export default ContactInput;
