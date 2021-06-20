// materialui
import TextField from '@material-ui/core/TextField';

const ContactInput = ({ errors, name, value, fn, errorMessage }) => {
    return (
        <div>
            <TextField
                variant="outlined"
                value={value}
                onChange={(e) => fn(e.target.value)}
                label={name}
                required
                error={errors[name]}
                multiline={name === 'Message'}
                rows={4}
            />
            {errors[name] && errorMessage}
        </div>
    );
};

export default ContactInput;
