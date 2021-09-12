import {Item} from "./Item";

export class ItemList {
    readonly items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items
    }

    static empty = () => new ItemList([])

    count = () => this.items.length;

    containsAll = (other: ItemList) => other.items.every(this.contains)

    matchRequirement = (requirement: Array<ItemList>) =>
        requirement.length === 0 || requirement.some((itList) => this.containsAll(itList))

    contains = (item: Item) => this.items.some((it) => it.name === item.name)

    append = (itemName: string) => new ItemList([...this.items, Item.of(itemName)])
}