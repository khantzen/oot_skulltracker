import {Token} from "./Token";
import {ItemList} from "./ItemList";

export class TokenList {
    readonly tokens: Token[];

    constructor(tokens: Token[]) {
        this.tokens = tokens
    }

    static empty = () => new TokenList([])

    count = () => this.tokens.length;

    findTokensFor (itemList: ItemList): TokenList {
        return new TokenList(this.tokens
            .filter((token) => token.alwaysRequired.every( (itList) => itemList.containsAll(itList)) )
            .filter((token) => token.unlockWith.some( (itList) => itemList.containsAll(itList)) )
        )
    }

    at = (index: number) => this.tokens[index]

    append = (token: Token) => new TokenList([...this.tokens, token])
}