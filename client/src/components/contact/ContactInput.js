// materialui
import TextField from '@material-ui/core/TextField';

const ContactInput = ({ errors, name, value, fn, errorMessage }) => {
    return (
        <div>
            <TextField
                color="inherit"
                value={value}
                onChange={(e) => fn(e.target.value)}
                label={name}
                required
                error={errors[name]}
                multiline
            />
            {errors[name] && errorMessage}
        </div>
    );
};

export default ContactInput;
