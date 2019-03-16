import { Store } from 'redux';
import ReduxModel from './Model';
export declare function setModel<P>(reduxModels: {
    [key: string]: ReduxModel<P>;
}, store: Store): void;
