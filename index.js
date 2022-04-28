const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json"); 
console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
const filterByMission = ExplorerService.filterByMission(explorers, "java");
console.log(filterByMission)

const getAmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
console.log(getAmountOfExplorersByMission);

const getExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(getExplorersUsernamesByMission)
