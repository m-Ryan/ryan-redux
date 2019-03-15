import { StoreEnhancer } from 'redux';
import { ReduxModels } from './combineModel';
export default function createStore(model: ReduxModels, ...args: StoreEnhancer[]): import("redux").Store<{
    [x: string]: any;
}, import("redux").AnyAction>;
