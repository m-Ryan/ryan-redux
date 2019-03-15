import { ReduxModels } from './combineModel';
export default function createStore(model: ReduxModels): import("redux").Store<{
    [x: string]: any;
}, import("redux").AnyAction>;
