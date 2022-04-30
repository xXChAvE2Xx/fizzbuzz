const ExplorerService = require("../services/ExplorerService");
//const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorerDB = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorerDB, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorerDB = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorerDB, mission);
    }

    static getExplorersAmountByMission(mission){
        const explorerDB = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorerDB, mission);
    }
}

module.exports = ExplorerController;
