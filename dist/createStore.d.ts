import { StoreEnhancer, DeepPartial } from 'redux';
import { ReduxModels } from './combineModel';
export default function createStore(model: ReduxModels, preloadedState?: DeepPartial<{}>, enhancer?: StoreEnhancer<{}, {}>): import("redux").Store<{}, import("redux").AnyAction>;
