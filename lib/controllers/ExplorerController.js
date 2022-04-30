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

    static applyValidationInNumber(number){
        if(number%5 === 0 && number%3 === 0){
            return "Fizzbuzz";
        }else if(number%3 === 0){
            return "Fizzz";
        }else if(number%5 === 0){
            return "Buzz";
        }else{
            return number;
        }
    }
}

module.exports = ExplorerController;
