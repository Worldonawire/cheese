const { expect } = require("chai");
const { cheesify } = require("../server.js");

describe("cheesify", function () {
    it("🧀 Should return a string", () => {
        const newCheeseName = cheesify("Simon", "Fuller");
        expect(typeof newCheeseName).to.equal("string");
    });
})