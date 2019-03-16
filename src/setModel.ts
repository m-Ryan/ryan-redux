import { Store } from 'redux';
import ReduxModel from './Model';
export function setModel<P>(reduxModels: { [key: string]: ReduxModel<P> }, store: Store) {
	for (const i in reduxModels) {
		const model = reduxModels[i];
		const setState = model.setState;
		model.setState = (payload: P) => {
			const newState = setState(payload);
			store.dispatch({
				type: model.nameSpace,
				payload
			});
			return newState;
		};
	}
}
