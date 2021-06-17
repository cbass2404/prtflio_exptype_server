import ReactDom from 'react-dom';

//redux
import { Provider } from 'react-redux';
import { store } from './redux/index';

// components
import App from './components/App';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
