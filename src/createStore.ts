import { createStore as reduxCreateStore, StoreEnhancer, DeepPartial } from 'redux';
import { setModel } from './setModel';
import { ReduxModels, combindModel } from './combineModel';

export default function createStore(
	models: ReduxModels,
	preloadedState?: DeepPartial<{}>,
	enhancer?: StoreEnhancer<{}, {}>
) {
	const reducers = combindModel(models);

	if (preloadedState) {
		for (const stateName in preloadedState) {
			for (const key in models) {
				if (stateName === models[key].nameSpace) {
					models[key].state = (preloadedState as any)[stateName];
				}
			}
		}
	}
	const store = reduxCreateStore(reducers, preloadedState, enhancer);
	setModel(models, store);
	return store;
}
