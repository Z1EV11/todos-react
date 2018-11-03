import { observable, computed, action } from 'mobx';

export default class Store {
    @observable info;
    @observable left;
    @observable type;
    @observable msg;

    constructor() {
        this.info = [];
        this.left = 0;
        this.type = 'All';
        this.msg = '';
    }

    @action 
    setInfo() {
        this.left++;
    }

    @computed
    get leftItems() {
        return this.left;
    } 

};
