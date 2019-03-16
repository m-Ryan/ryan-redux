import ReduxModel from './Model';
import { combineReducers } from 'redux';
export interface ModelAction<P> {
	type: string;
	payload: P;
}

export interface ReduxModels {
	[key: string]: ReduxModel<any>;
}

export function combindModel(reduxModels: ReduxModels) {
	let result = {} as { [key: string]: <S>(state: S | undefined, action: ModelAction<any>) => S };
	for (const k in reduxModels) {
		const model = reduxModels[k];
		if (!model.nameSpace) {
			throw new Error('nameSpace 不能为空');
		}
		result[model.nameSpace] = (state = model.state, action: ModelAction<any>) => {
			const nameSpace = action.type;
			if (nameSpace === model.nameSpace) {
				if (state === action.payload) {
					throw new Error('setState 返回的对象不能是原来的state对象');
				}
				state = action.payload;
				model.state = state;
			}

			return state;
		};
	}
	return combineReducers(result);
}
