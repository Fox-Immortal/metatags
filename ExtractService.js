import { Singleton } from "./Singleton.js";

export class ExtractService extends Singleton {
    constructor(id) {
        super(id);
    }

    static makeInstance() {
        return new ExtractService(ExtractService.name);
    }

    extractMessages(json) {
        const data = json.data;
        const messages = data[Object.keys(data)[0]];
        return messages;
    }
    extractNotes(messages) {
        const notes = [];
        for (let key in messages) {
            const value = messages[key];
            let message = value.m;
            message = message.slice(2);
            message = (message[message.length - 1] == ',' ? message.substr(0, message.length - 1) : message)
            notes.push(message);
        }
        return notes;
    }
}