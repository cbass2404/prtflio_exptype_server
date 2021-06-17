import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/authActions';

// components
import '../styles/common.css';
import NavBar from './navigation/NavBar';
import Home from './pages/Home';

const App = ({ fetchUser }) => {
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default connect(null, { fetchUser })(App);
