export class Item {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    static of = (name: string) => new Item(name)
}