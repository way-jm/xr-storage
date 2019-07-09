import { StorageType, StoreConfig } from './types';
declare class Store {
    storage: any;
    disabled: boolean;
    constructor(type: StorageType);
    do(config: StoreConfig): any;
    set(key: string | undefined, value?: any): any;
    get(key: string | undefined): any;
    has(key: string | undefined): boolean;
    remove(key: string | undefined): void;
    clear(): void;
    getAll(): object;
    forEach(callback: any): void;
}
export default Store;
