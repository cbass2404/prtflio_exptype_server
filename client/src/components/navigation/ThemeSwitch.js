import { useState } from 'react';

// materialui
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ThemeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <FormGroup row>
            <FormControlLabel
                label={darkMode ? 'Light' : 'Dark'}
                control={
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        name="checkedA"
                    />
                }
            />
        </FormGroup>
    );
};

export default ThemeSwitch;
