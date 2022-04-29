const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Pruebas unitarias para FizzbuzzService", () =>{
    test("If the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ", () =>{
        const explorer = {name: "Explorer1", score: 3}

        const FIZZ = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(FIZZ.trick).toBe("FIZZ");
    });
})