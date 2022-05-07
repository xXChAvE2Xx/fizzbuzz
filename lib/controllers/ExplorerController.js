const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
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

    static applyValidationInNumber(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static applyValidationInBot(data){
        if(data == "node" || data == "java"){
            const explorerDB = Reader.readJsonFile("explorers.json");
            const explorerByMission = ExplorerService.filterByMission(explorerDB, data);
            return JSON.stringify(explorerByMission);
        }else if(!isNaN(data)){
            const num = parseInt(data);
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(num);
            return `Tu número es: ${data}. Validación: ${fizzbuzzTrick}`;
        }else{
            return "Envía un número válido";
        }
    }
}

module.exports = ExplorerController;
