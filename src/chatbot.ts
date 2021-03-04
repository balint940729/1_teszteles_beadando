export class ChatBot{
    constructor(){}

    public greet(names: string[]): string{
        let sentence:string;
        if (names.length < 1) {
            return "Hello, my friend.";
        }
        if (names.length > 1) {
            let i:number = 0;
            sentence = "Hello, ";
            while (i<names.length-1) {
                sentence += names[i] + ", ";
                i++;
            }
            sentence += "and " + names[names.length-1] + ".";
            return sentence;
        }
        return "Hello, " + names + ".";
    }
}