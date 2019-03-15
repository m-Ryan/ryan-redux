import { Store } from 'redux';
import ReduxModel from './Model';
export function setModel(reduxModels: { [key: string]: ReduxModel<any> }, store: Store) {
	for (const i in reduxModels) {
		const model = reduxModels[i];
		const setState = model.setState;
		model.setState = (payload: any) => {
			const newState = setState(payload);
			store.dispatch({
				type: model.nameSpace,
				payload
			});
			return newState;
		};
	}
}
