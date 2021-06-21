const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateTextInput = (arr, fn) => {
    return arr.map(({ name, value, errorMessage }) => {
        if (value === '') {
            fn((prevState) => {
                return { ...prevState, [name]: errorMessage };
            });
        } else {
            fn((prevState) => {
                return { ...prevState, [name]: '' };
            });
        }
        return null;
    });
};

export const validateEmail = (state, setErrorState, setNotValid) => {
    const valid = re.test(state);

    if (!valid) {
        setErrorState((prevState) => {
            return { ...prevState, Email: 'Invalid email' };
        });
    } else {
        setNotValid(false);
    }
};
