const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: filter By Mission", () =>{
        const explorers = [{"mission": "java"}];
        const explorersInJava = ExplorerService.filterByMission(explorers, "java");

        expect(explorersInJava.length).toBe(1);
    });

    test("Requerimiento 2: Get Amount Of Explorers By Mission", () =>{
       const explorers =  [
            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa2",
                "githubUsername": "ajolonauta2",
                "score": 2,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "groovy",
                    "elm"
                ]
            }, 
        ]

        const amountOfExplorers =  ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(amountOfExplorers).toBe(2);
    });

    test("Requerimiento 3: Get Explorers Usernames By Mission", () =>{
        const explorers =  [{"githubUsername":"ajolonauta1", "mission": "java"}];

        const getExplorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "java");

        expect(getExplorersUsernames).toStrictEqual(["ajolonauta1"]);
    });

});