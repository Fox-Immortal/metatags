export class Singleton {
    static instance = null;
    id = "x";
    constructor(id) {
        this.id = id;
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = this.makeInstance();
        }
        return this.instance;

    }
    static makeInstance() {
        return new Singleton(Singleton.name);
    }
}