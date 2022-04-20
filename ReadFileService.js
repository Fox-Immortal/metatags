import { Singleton } from "./Singleton.js"
import fs from "fs";
export class ReadFileService extends Singleton {
    constructor(id) {
        super(id);
    }
    static makeInstance() {
        return new ReadFileService(ReadFileService.name);
    }
    readFile(filePath) {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    }
    readJson(filePath) {
        return JSON.parse(this.readFile(filePath));
    }
}