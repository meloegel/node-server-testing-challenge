
const db = require("../data/db-config");
const Friends = require("./friends-model.js");
const { request } = require("../server");

describe("environment", function () {
    it("should be using the testing database", function () {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

describe("friends model", function () {
    describe("addFriend", function () {
        beforeEach(async () => {
            await db("friends").truncate();
        });

        it("should insert friends into database", async () => {

            await Friends.addFriend({ name: "billy" });
            await Friends.addFriend({ name: "zeus" });

            const friends = await db("friends");

            expect(friends).toHaveLength(2);
        });

    });
    describe("deleteFriend", function () {
        beforeEach(async () => {
            await db("friends").truncate();
        });

        it("should insert friends into database", async () => {

            await Friends.addFriend({ name: "billy" });
            await Friends.addFriend({ name: "zeus" });
            await Friends.deleteFriend(1)


            const friends = await db("friends");

            expect(friends).toHaveLength(1);
        });
    });


});