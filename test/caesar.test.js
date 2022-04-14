// Write your tests here!
const  expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is 0", () => {
            let input = "zebra magazine";
            let shift = 0;
            let actual = caesar(input, shift);
            
            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is less than -25", () => {
            let input = "zebra magazine";
            let shift = -26;
            let actual = caesar(input, shift);
            
            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is above 25", () => {
            let input = "zebra magazine";
            let shift = 26;
            let actual = caesar(input, shift);
            
            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is not present", () => {
            let input = "zebra magazine";
            let shift = "";
            let actual = caesar(input, shift);
            
            expect(actual).to.be.false;
        });

        it("should ignore capital letters", () => {
            let input = "A Message";
            let shift = 3;
            let actual = caesar(input, shift);
            let expected = "d phvvdjh";
      
            expect(actual).to.equal(expected);
        });

        it("should handle shifts that go past the end of the alphabet", () => {
            let input = "zebra magazine";
            let shift = 3;
            let actual = caesar(input, shift);
            let expected = "cheud pdjdclqh";

            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and other nonalphabetic symbols in the message", () => {
            let input = "a message.";
            let shift = 3;
            let actual = caesar(input, shift);
            let expected = "d phvvdjh.";

            expect(actual).to.equal(expected);
        });
    })
})