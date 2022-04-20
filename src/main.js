import { ExtractService } from "../Services/ExtractService.js";
import { ReadFileService } from "../Services/ReadFileService.js";
import { Notes } from "../Entity/Notes.js";
const extractService = ExtractService.getInstance();
const readFileService = ReadFileService.getInstance();
function main() {
    const json = readFileService.readJson('resources/dht.json');
    const messages = extractService.extractMessages(json);
    const notesArray = extractService.extractNotes(messages);
    const notes = new Notes(notesArray);
    notes.removeWhiteSpaces();
    notes.print();
    return;
}

main();





