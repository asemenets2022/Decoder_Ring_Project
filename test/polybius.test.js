// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("error handling", () => {
        it("when encoding, it translates the letters i and j to 42", () => {
            let input = "jiggle";
            let actual = polybius(input);
            let expected = "424222221351";
      
            expect(actual).to.equal(expected);
        });

        it("when decoding, it translates 42 to (i/j)", () => {
            let input = "424222221351";
            let actual = polybius(input, false);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });

        it("ignores capital letters", () => {
            let input = "My message";
            let actual = polybius(input);
            let expected = "2345 23513434112251";

            expect(actual).to.equal(expected);
        });

        it("when encoding, maintains spaces in the message", () => {
            let input = "my message";
            let actual = polybius(input);
            let expected = "2345 23513434112251";

            expect(actual).to.equal(expected);
        });

        it("when decoding, maintains spaces in the message", () => {
            let input = "2345 23513434112251";
            let actual = polybius(input, false);
            let expected = "my message";

            expect(actual).to.equal(expected);
        });
    })
})