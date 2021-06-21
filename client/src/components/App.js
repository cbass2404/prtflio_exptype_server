import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/authActions';
import { fetchMessages } from '../redux/actions/messageActions';

// materialui
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../styles/theme';

// components
import '../styles/common.css';
import TopNavBar from './navigation/TopNavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NoMatch from './pages/NoMatch';

const App = ({ auth, messages, fetchUser, fetchMessages }) => {
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    useEffect(() => {
        if (auth !== null && auth.admin) {
            fetchMessages();
        }
    }, [fetchMessages, auth]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Router>
                    <TopNavBar />
                    <Container maxWidth="lg" align="center">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/projects"
                                component={Projects}
                            />
                            <Route exact path="/blog" component={Blog} />
                            <Route path="/contact" component={Contact} />
                            <Route path="*" component={NoMatch} />
                        </Switch>
                    </Container>
                </Router>
            </div>
        </ThemeProvider>
    );
};

const mapPropsToState = (state) => ({
    auth: state.auth,
    messages: state.messages,
});

export default connect(mapPropsToState, { fetchUser, fetchMessages })(App);
