import {Token} from "./Token";
import {ItemList} from "../Inventory/ItemList";
import {TokenType} from "../Location/TokenType";
import {Region} from "../Location/Region";

export class TokenList {
    readonly tokens: Token[];

    constructor(tokens: Token[]) {
        this.tokens = tokens
    }

    static empty = () => new TokenList([])
    append = (token: Token) => new TokenList([...this.tokens, token])

    count = () => this.tokens.length;
    at = (index: number) => this.tokens[index]

    findTokenInLogicFor = (itemList: ItemList) =>
        new TokenList(
            this.tokens
                .filter((token) => itemList.matchRequirement(token.alwaysRequired))
                .filter((token) => itemList.matchRequirement(token.unlockWith))
        )

    listOverworldToken = () => new TokenList(this.tokenFor(TokenType.Overworld))
    listDungeonToken = () => new TokenList(this.tokenFor(TokenType.Dungeon))
    listTokenIn = (region: Region) => new TokenList(this.tokens.filter((token) => token.region === region))

    private tokenFor = (type: TokenType) => this.tokens
        .filter((token) => token.tokenType === type);
}