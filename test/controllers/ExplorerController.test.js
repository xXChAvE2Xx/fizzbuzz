const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Pruebas para ExplorerController", () =>{
    test("1.- Obtener la cantidad de explorers por mision (Node)", () =>{
        const explorersInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(explorersInNode).toBe(10);
    });

    test("2.- Obtener la cantidad de explorers por mision (Java)", () =>{
        const explorersInJava = ExplorerController.getExplorersAmountByMission("java");
        expect(explorersInJava).toBe(5);
    });

    test("3.- Obtener nombres de explorers por mission (node)", () =>{
        const explorersUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsername).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("3.- Obtener nombres de explorers por mission (java)", () =>{
        const explorersUsername = ExplorerController.getExplorersUsernamesByMission("java");
        expect(explorersUsername).toStrictEqual(["ajolonauta6", "ajolonauta7", "ajolonauta8", "ajolonauta9", "ajolonauta10"]);
    });

    test("4.- Obtener los explorers por mission (node)", () =>{
        const explorerNode = ExplorerController.getExplorersByMission("node");
        expect(explorerNode).toStrictEqual([
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
            {
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                    "elixir",
                    "groovy",
                    "reasonML"
                ]
            },
            {
                "name": "Woopa4",
                "githubUsername": "ajolonauta4",
                "mission": "node",
                "score": 4,
                "stacks": [
                    "javascript"
                ]
            },
            {
                "name": "Woopa5",
                "githubUsername": "ajolonauta5",
                "score": 5,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "elm"
                ]
            },
            {
                "name": "Woopa11",
                "githubUsername": "ajolonauta11",
                "score": 11,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]);
    });


    test("5.- Obtener los explorers por mission (java)", () =>{
        const explorerJava = ExplorerController.getExplorersByMission("java");
        expect(explorerJava).toStrictEqual([  
            {
                "name": "Woopa6",
                "githubUsername": "ajolonauta6",
                "score": 6,
                "mission": "java",
                "stacks": [
                    "elm"
                ]
            },
            {
                "name": "Woopa7",
                "githubUsername": "ajolonauta7",
                "mission": "java",
                "score": 7,
                "stacks": []
            },
            {
                "name": "Woopa8",
                "githubUsername": "ajolonauta8",
                "score": 8,
                "mission": "java",
                "stacks": [
                    "elm"
                ]
            },
            {
                "name": "Woopa9",
                "githubUsername": "ajolonauta9",
                "score": 9,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa10",
                "githubUsername": "ajolonauta10",
                "score": 10,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]);
    });

    test("5. Obtener Fizz, Buzz, Fizzbuzz o score, dependiendo del score recibido", () =>{
        const scoreFizz = ExplorerController.applyValidationInNumber(3);
        expect(scoreFizz).toBe("Fizzz");
    });
  
});