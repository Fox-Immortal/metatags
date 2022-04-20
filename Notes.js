export class Notes {
    notes = [];
    constructor(notes) {
        this.notes = notes;
    }
    removeWhiteSpaces() {
        for (let index in this.notes) {
            const regex = /  /g;
            this.notes[index] = this.notes[index].replace(regex, " ");
        }
        console.log('this.notes :>> ', this.notes);

    }
    print() {
        console.log("");
        for (let note of this.notes) {
            console.log(note);
        }
        console.log("");
    }
}