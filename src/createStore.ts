import { createStore as reduxCreateStore, StoreEnhancer } from 'redux';
import { setModel } from './setModel';
import { ReduxModels, combindModel } from './combineModel';

export default function createStore(model: ReduxModels, ...args: StoreEnhancer[]) {
	const reducers = combindModel(model);
	const store = reduxCreateStore(reducers, ...args);
	setModel(model, store);
	return store;
}
