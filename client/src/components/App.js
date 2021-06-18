import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/authActions';

// materialui
import { createMuiTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import '../styles/common.css';
import LoginBar from './navigation/LoginBar';
import NavBar from './navigation/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Contact';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const App = ({ fetchUser }) => {
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <LoginBar />
                <NavBar />
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default connect(null, { fetchUser })(App);
