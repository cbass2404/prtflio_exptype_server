import { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/authActions';

// materialui
import { createMuiTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// components
import '../styles/common.css';
import NavBar from './navigation/NavBar';
import Home from './pages/Home';

const App = ({ fetchUser }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    );

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <NavBar />
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default connect(null, { fetchUser })(App);
