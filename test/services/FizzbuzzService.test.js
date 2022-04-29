const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Pruebas unitarias para FizzbuzzService", () =>{
    test("If the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ", () =>{
        const explorer = {name: "Explorer1", score: 3}

        const FIZZ = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(FIZZ.trick).toBe("FIZZ");
    });

    test("If the score numbers is divisible by 5, I need a new propery called trick, and the value assigned is BUZZ", () =>{
        const explorer = {name: "Explorer2", score: 5}

        const BUZZ = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(BUZZ.trick).toBe("BUZZ");
    })


    test("If the score numbers is divisible by 5 and 3, I need a new propery called trick, and the value assigned is FIZZBUZZ", () =>{
        const explorer = {name: "Explorer3", score: 15}

        const FIZZBUZZ = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(FIZZBUZZ.trick).toBe("FIZZBUZZ");
    })
})