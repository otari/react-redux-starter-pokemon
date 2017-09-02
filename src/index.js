// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './containers/Root';
// import configureStore from './store';
// //import registerServiceWorker from './registerServiceWorker';
// const target = document.getElementById('root');
// const store = configureStore(window.__INITIAL_STATE__);

// const node = (
//     <Root store={store} />
// );

// ReactDOM.render(node, target);
//registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

import configureStore from './store/configureStore';

const store = configureStore(undefined);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

//import App from './components/App';
//ReactDOM.render(<App />, document.getElementById('root'));
