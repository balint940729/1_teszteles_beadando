export class ChatBot{
    constructor(){}

    public greet(names: string[]): string{
        let sentence:string;

        if (names.length > 1) {
            sentence = "Hello, ";
            for(let i=0; i < names.length; i++){
                if (i === names.length-1){
                    return sentence += "and " + names[i] + ".";
                }
                sentence += names[i] + ", ";
            }
        }

        if (names.length === 1) {
            return "Hello, " + names + ".";
        }

        return "Hello, my friend.";
    }
}