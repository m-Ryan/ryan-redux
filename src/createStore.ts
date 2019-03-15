import { createStore as reduxCreateStore, StoreEnhancer, DeepPartial } from 'redux';
import { setModel } from './setModel';
import { ReduxModels, combindModel } from './combineModel';

export default function createStore(
	model: ReduxModels,
	preloadedState?: DeepPartial<{}>,
	enhancer?: StoreEnhancer<{}, {}>
) {
	const reducers = combindModel(model);
	const store = reduxCreateStore(reducers, preloadedState, enhancer);
	setModel(model, store);
	return store;
}
