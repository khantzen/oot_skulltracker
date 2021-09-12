import {Item} from "../../core/Item";
import {ItemList} from "../../core/ItemList";
import {Token} from "../../core/Token";
import {TokenList} from "../../core/TokenList";

test("Token that does not match an item list should not be yield", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01", [ItemList.empty().append("hookshot")]))

    const matchingTokens = tokenList.findTokensFor(ItemList.empty());

    expect(matchingTokens.count()).toBe(0)
})

test("Token that match a given item list should be yield", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01", [ItemList.empty().append("hookshot")]))

    const matchingTokens = tokenList.findTokensFor(
        ItemList.empty().append("hookshot")
    );

    expect(matchingTokens.count()).toBe(1)
})

test("Test contains all on item list", () => {
    let inventory = new ItemList([new Item("hookshot")]);
    let required = new ItemList([new Item("hookshot")]);
    expect(inventory.containsAll(required)).toBe(true)
})

test("Should only return the matching tokens", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01", [ItemList.empty().append("hookshot")]))
        .append(new Token("ut_02", [ItemList.empty().append("boomerang")]))

    const matchingTokens = tokenList.findTokensFor(ItemList.empty().append("hookshot"));

    expect(matchingTokens.count()).toBe(1)
    expect(matchingTokens.at(0).id).toBe("ut_01")
})

test("Should not return token when inventory does not contains all required", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01",
            [
                ItemList.empty()
                    .append("hookshot")
                    .append("hover_boots")
            ]))

    const matchingTokens = tokenList.findTokensFor(ItemList.empty().append("hookshot"))
    expect(matchingTokens.count()).toBe(0)
})

test("Should return the token when one of the unlock requirement is validated", () => {
    const tokenList = TokenList.empty()
        .append(
            new Token("ut_01",
                [
                    ItemList.empty().append("hookshot"),
                    ItemList.empty().append("hover_boots").append("bow")
                ]
            ))

    const matchingTokens = tokenList.findTokensFor(
        ItemList.empty()
            .append("bow")
            .append("hover_boots")
            .append("boomerang"))

    expect(matchingTokens.count()).toBe(1)
})

test("Token should not be returned when AlwaysRequire is not satisfied", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01",
            [
                ItemList.empty()
                    .append("strength")
                    .append("hookshot")
                    .append("scarecrow")
            ],
            [
                ItemList.empty().append("hover_boots"),
                ItemList.empty().append("bolero")
            ]
        ))

    const matchingTokens = tokenList.findTokensFor(ItemList.empty()
        .append("hookshot")
        .append("scarecrow")
        .append("strength")
        .append("boomerang"))

    expect(matchingTokens.count()).toBe(0)
})