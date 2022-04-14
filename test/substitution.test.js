// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("error handling", () => {
        it("returns false if the given alphabet isn't exactly 26 characters long", () => {
            let input = "message";
            let alphabet = "short";
            let actual = substitution(input, alphabet);
            
            expect(actual).to.be.false;
        });

        it("correctly translates the given phrase, based on the alphabet given to the function", () => {
            let input = "message";
            let alphabet = "plmoknijbuhvygctfxrdzeswaq";
            let actual = substitution(input, alphabet);
            let expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });

        it("returns false if there are any duplicate characters in the given alphabet", () => {
            let input = "message";
            let alphabet = "abcabcabcabcabcabcabcabcab";
            let actual = substitution(input, alphabet);
            
            expect(actual).to.be.false;
        });

        it("maintains spaces in the message, before and after encoding or decoding", () => {
            let input = "my message";
            let alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            let actual = substitution(input, alphabet);
            let expected = "yp ysii.rs";

            expect(actual).to.equal(expected);
        });

        it("ignores capital letters", () => {
            let input = "My message";
            let alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            let actual = substitution(input, alphabet);
            let expected = "yp ysii.rs";

            expect(actual).to.equal(expected);
        });

    })
})

