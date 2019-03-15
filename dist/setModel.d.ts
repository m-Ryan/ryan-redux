import { Store } from 'redux';
import ReduxModel from './Model';
export declare function setModel(reduxModels: {
    [key: string]: ReduxModel<any>;
}, store: Store): void;
