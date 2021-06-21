/* eslint-disable array-callback-return */
const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateTextInput = (arr, fn) => {
    let invalidItems;

    arr.forEach(({ name, value, errorMessage }) => {
        if (value === '') {
            invalidItems = { ...invalidItems, [name]: errorMessage };
        }
    });
    if (invalidItems) {
        fn(invalidItems);
        return false;
    } else {
        return true;
    }
};

export const validateEmail = (state, fn) => {
    const valid = re.test(state);

    if (!valid) {
        fn({ Email: 'Not a valid email', Name: '', Message: '' });
        return false;
    }

    return true;
};
