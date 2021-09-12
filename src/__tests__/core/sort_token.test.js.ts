import {TokenList} from "../../core/Skull/TokenList";
import {Token} from "../../core/Skull/Token";
import {TokenType} from "../../core/Location/TokenType";
import {Region} from "../../core/Location/Region";

test("Should be able to find token by type", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01", [], [], TokenType.Overworld))
        .append(new Token("ut_02", [], [], TokenType.Overworld))
        .append(new Token("ut_03", [], [], TokenType.Overworld))
        .append(new Token("ut_04", [], [], TokenType.Overworld))
        .append(new Token("ut_05", [], [], TokenType.Dungeon))
        .append(new Token("ut_06", [], [], TokenType.Dungeon));

    const overworldToken = tokenList.listOverworldToken()
    const dungeonToken = tokenList.listDungeonToken()

    expect(dungeonToken.count()).toBe(2)
    expect(overworldToken.count()).toBe(4)
})

test("Should be able to find token by region", () => {
    const tokenList = TokenList.empty()
        .append(new Token("ut_01", [], [], TokenType.Dungeon, Region.DekuTree))
        .append(new Token("ut_02", [], [], TokenType.Dungeon, Region.Jabu))
        .append(new Token("ut_03", [], [], TokenType.Overworld, Region.KakarikoVillage))
        .append(new Token("ut_04", [], [], TokenType.Overworld, Region.KakarikoVillage))

    const dekuTreeTokens = tokenList.listTokenIn(Region.DekuTree);
    const kakarikoTokens = tokenList.listTokenIn(Region.KakarikoVillage)

    expect(dekuTreeTokens.count()).toBe(1)
    expect(kakarikoTokens.count()).toBe(2)
})