import {Token} from "./Token";
import {ItemList} from "./ItemList";

export class TokenList {
    readonly tokens: Token[];

    constructor(tokens: Token[]) {
        this.tokens = tokens
    }

    static empty = () => new TokenList([])
    append = (token: Token) => new TokenList([...this.tokens, token])

    count = () => this.tokens.length;
    at = (index: number) => this.tokens[index]

    findTokensFor = (itemList: ItemList) =>
        new TokenList(
            this.tokens
            .filter((token) => itemList.matchRequirement(token.alwaysRequired))
            .filter((token) => itemList.matchRequirement(token.unlockWith))
        )

}