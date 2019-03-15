import { createStore as reduxCreateStore } from 'redux';
import { setModel } from './setModel';
import { ReduxModels, combindModel } from './combineModel';

export default function createStore(model: ReduxModels) {
	const reducers = combindModel(model);
	const store = reduxCreateStore(reducers);
	setModel(model, store);
	return store;
}
