import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './state/reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './firebaseConfig';


const store = createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirestore)),
        reduxFirestore(firebaseConfig),
        // reactReduxFirebase(firebaseConfig, {}),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
