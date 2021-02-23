import MyConfiguration from "./index"
import { expect } from "chai";
import "mocha";

let config = MyConfiguration.getInstance();

describe("My Configuration class", ()=> {

    it("Object should not be null", () => {
        expect( config !== null).to.equal(true);
    });

    it("Objects should be equals", () => {
        let config2 = MyConfiguration.getInstance();
        expect(config === config2).to.equal(true);
    });

    it("environment property should be development", () => {
        expect(config.getEnvironment === "development").to.equal(true);
    })
});