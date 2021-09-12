import {ItemList} from "./ItemList";

export class Token {
    readonly id: string;
    readonly unlockWith: Array<ItemList>;
    readonly alwaysRequired: Array<ItemList>;

    constructor(
        id: string,
        unlockWith: Array<ItemList> = [],
        alwaysRequired: Array<ItemList> = []
    ) {
        this.id = id;
        this.unlockWith = unlockWith;
        this.alwaysRequired = alwaysRequired;
    }

}