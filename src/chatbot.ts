export class ChatBot{
    constructor(){}

    public greet(names: string[]): string{
        if (names.length < 1) {
            return "Hello, my friend.";
        }
        return "Hello, " + names + ".";
    }
}