import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'ryan-redux';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
