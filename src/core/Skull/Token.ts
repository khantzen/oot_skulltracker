import {ItemList} from "../Inventory/ItemList";
import {TokenType} from "../Location/TokenType";
import {Region} from "../Location/Region";

export class Token {
    readonly id: string;
    readonly unlockWith: Array<ItemList>;
    readonly alwaysRequired: Array<ItemList>;
    readonly tokenType: TokenType;
    readonly region: Region;

    constructor(
        id: string,
        unlockWith: Array<ItemList> = [],
        alwaysRequired: Array<ItemList> = [],
        tokenType: TokenType = TokenType.Undefined,
        region: Region = Region.Undefined
    ) {
        this.id = id;
        this.unlockWith = unlockWith;
        this.alwaysRequired = alwaysRequired;
        this.tokenType = tokenType;
        this.region = region;
    }

}