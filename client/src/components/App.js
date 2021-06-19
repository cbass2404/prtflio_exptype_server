import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/authActions';

// materialui
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../styles/theme';

// components
import '../styles/common.css';
import NavBar from './navigation/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NoMatch from './pages/NoMatch';

const App = ({ fetchUser }) => {
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
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/blog" component={Blog} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default connect(null, { fetchUser })(App);
