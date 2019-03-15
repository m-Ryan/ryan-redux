import ReduxModel from './Model';
export interface ModelAction<P> {
    type: string;
    payload: P;
}
export interface ReduxModels {
    [key: string]: ReduxModel<any>;
}
export declare function combindModel(reduxModels: ReduxModels): import("redux").Reducer<{
    [x: string]: any;
}, import("redux").AnyAction>;
