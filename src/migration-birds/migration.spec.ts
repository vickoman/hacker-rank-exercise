import { expect } from "chai";
import "mocha";
import HackerRank from ".";


describe("Migration Birds", () => {
    describe("For Input 6 [1 4 4 4 5 3]", () => {
        const arrgTest1 = [1, 4, 4, 4, 5, 3];
        it("Should return type 4 sighted", () => {
            expect(4).to.equal(HackerRank.sightingViewsOfMigrationBirds(arrgTest1))
        });
    });

    describe("For Input 11 [1 2 3 4 5 4 3 2 1 3 4]", () => {
        const arrgTest1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
        it("Should return type 3 sighted", () => {
            expect(3).to.equal(HackerRank.sightingViewsOfMigrationBirds(arrgTest1))
        });
    });

    describe("For Input 15 [1 1 1 4 5 4 2 2 2 3 4]", () => {
        const arrgTest1 = [1, 1, 1, 4, 5, 4, 2, 2, 2, 3, 4, 1, 2, 5, 3];
        it("Should return type 1 sighted", () => {
            expect(1).to.equal(HackerRank.sightingViewsOfMigrationBirds(arrgTest1))
        });
    });
});